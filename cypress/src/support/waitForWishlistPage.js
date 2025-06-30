/**
 * Custom command to wait for wishlist page to be fully loaded
 * This command ensures the page is ready before running assertions
 */
Cypress.Commands.add('waitForWishlistPageLoaded', () => {
  // Add persistent debugging log that will show in the command log
  Cypress.log({
    name: 'waitForWishlistPageLoaded',
    message: 'Starting wishlist page load wait',
    consoleProps: () => {
      return {
        'Step': 'Starting wishlist page load wait',
        'URL': window.location?.href || 'unknown'
      };
    }
  });

  // Wait for generic loading to disappear
  cy.get('body').should('not.contain', 'Loading...');

  // Debug step 1: Check URL
  cy.url().then(url => {
    Cypress.log({
      name: 'debug',
      message: `Current URL: ${url}`,
      consoleProps: () => ({ url })
    });
  });

  // Ensure we're on the wishlist page
  cy.url().should('include', '/wishlist');

  // Debug step 2: Check for wishlist wrapper
  cy.get('body').then($body => {
    const hasWrapper = $body.find('.commerce-wishlist-wrapper').length > 0;
    Cypress.log({
      name: 'debug',
      message: `Wishlist wrapper exists: ${hasWrapper}`,
      consoleProps: () => ({ hasWrapper })
    });
  });

  // Wait for the wishlist wrapper to exist
  cy.get('.commerce-wishlist-wrapper').should("exist");

  // Debug step 3: Comprehensive state check with error handling
  cy.window().then(win => {
    try {
      const debugInfo = {
        localStorage: {
          keys: Object.keys(win.localStorage || {}),
          wishlistData: win.localStorage?.getItem('DROPIN__WISHLIST__WISHLIST__DATA') || 'not found'
        },
        domElements: {},
        networkState: 'unknown'
      };

      // Check DOM elements
      const elements = [
        'loader-wishlist-heading',
        'wishlist-loader', 
        'empty-wishlist',
        'default-wishlist-heading'
      ];

      elements.forEach(testId => {
        const element = win.document.querySelector(`[data-testid="${testId}"]`);
        debugInfo.domElements[testId] = {
          exists: !!element,
          visible: element ? element.offsetParent !== null : false,
          innerHTML: element ? element.innerHTML.substring(0, 100) : null
        };
      });

      // Check for wishlist items
      const wishlistItems = win.document.querySelectorAll('.wishlist-product-item');
      debugInfo.domElements.wishlistItems = {
        count: wishlistItems.length,
        visible: Array.from(wishlistItems).filter(item => item.offsetParent !== null).length
      };

      // Network state
      if (win.performance) {
        const resources = win.performance.getEntriesByType('resource');
        const pendingResources = resources.filter(r => !r.responseEnd);
        debugInfo.networkState = `${pendingResources.length} pending requests`;
      }

      Cypress.log({
        name: 'debug-state',
        message: 'Wishlist page state analysis',
        consoleProps: () => debugInfo
      });

      // Also log to browser console for easier debugging
      console.log('=== WISHLIST DEBUG STATE ===', debugInfo);

    } catch (error) {
      Cypress.log({
        name: 'debug-error',
        message: `Debug failed: ${error.message}`,
        consoleProps: () => ({ error: error.toString() })
      });
    }
  });

  // Take a screenshot for visual debugging
  cy.screenshot('wishlist-debug-state', { capture: 'viewport' });

  // NEW: Add progressive debugging - check state every 5 seconds during the wait
  let attemptCount = 0;
  
  // Take screenshot before final check for debugging
  cy.screenshot('wishlist-before-final-check', { capture: 'viewport' });

  // Debug step 4: Enhanced wait with comprehensive state checking
  // Create a custom recursive checking function that avoids cy.should() limitations
  const checkWishlistContent = (maxAttempts = 175) => { // ~35 seconds with 200ms intervals
    return cy.get('body').then($body => {
      attemptCount++;
      
      const hasWishlistHeading = $body.find('[data-testid="default-wishlist-heading"]').length > 0;
      const hasEmptyWishlist = $body.find('[data-testid="empty-wishlist"]').length > 0;
      const hasWishlistItems = $body.find('.wishlist-product-item').length > 0;
      
      // Check for loading indicators that might be stuck
      const hasLoadingText = $body.text().includes('Loading');
      const hasLoaderElement = $body.find('[data-testid="wishlist-loader"]').length > 0;
      const hasSkeletonLoader = $body.find('.skeleton, .shimmer, .loading-skeleton').length > 0;
      
      // Get visible text content for debugging
      const bodyText = $body.text().trim().substring(0, 200);
      const isContentReady = hasWishlistHeading || hasEmptyWishlist || hasWishlistItems;

      // Log current state for debugging every few attempts
      if (attemptCount % 15 === 1) { // Log every ~3 seconds
        Cypress.log({
          name: 'progressive-debug',
          message: `Attempt ${attemptCount}: ${isContentReady ? 'SUCCESS' : 'Still loading...'}`,
          consoleProps: () => ({
            attempt: attemptCount,
            hasWishlistHeading,
            hasEmptyWishlist,
            hasWishlistItems,
            hasLoadingText,
            hasLoaderElement,
            hasSkeletonLoader,
            bodyText,
            elementCount: $body.find('*').length
          })
        });
      }

      // Take periodic screenshots outside of should() callback
      if (attemptCount === 15) {
        cy.screenshot('wishlist-attempt-15', { capture: 'viewport' });
      } else if (attemptCount === 50) {
        cy.screenshot('wishlist-attempt-50', { capture: 'viewport' });
      } else if (attemptCount === 100) {
        cy.screenshot('wishlist-attempt-100', { capture: 'viewport' });
      }

      // If content is ready, we're done
      if (isContentReady) {
        Cypress.log({
          name: 'content-ready',
          message: `Content loaded after ${attemptCount} attempts`,
          consoleProps: () => ({ attemptCount, hasWishlistHeading, hasEmptyWishlist, hasWishlistItems })
        });
        return Promise.resolve();
      }

      // If we've reached max attempts, fail with detailed info
      if (attemptCount >= maxAttempts) {
        Cypress.log({
          name: 'timeout-debug',
          message: 'Timeout reached - final state check',
          consoleProps: () => ({
            totalAttempts: attemptCount,
            stillHasLoadingText: hasLoadingText,
            stillHasLoaderElement: hasLoaderElement,
            stillHasSkeletonLoader: hasSkeletonLoader,
            currentBodyText: bodyText,
            allElementsFound: {
              '[data-testid="default-wishlist-heading"]': hasWishlistHeading,
              '[data-testid="empty-wishlist"]': hasEmptyWishlist,
              '.wishlist-product-item': hasWishlistItems
            }
          })
        });
        
        cy.screenshot('wishlist-final-timeout-state', { capture: 'viewport' });
        throw new Error(`Wishlist page failed to load after ${attemptCount} attempts. Found: heading=${hasWishlistHeading}, empty=${hasEmptyWishlist}, items=${hasWishlistItems}. Page still shows loading indicators: text=${hasLoadingText}, loader=${hasLoaderElement}, skeleton=${hasSkeletonLoader}`);
      }

      // Wait a bit and try again
      return cy.wait(200).then(() => checkWishlistContent(maxAttempts));
    });
  };

  // Start the recursive checking
  checkWishlistContent();

  // Final success log
  Cypress.log({
    name: 'waitForWishlistPageLoaded',
    message: 'Wishlist page loaded successfully',
    consoleProps: () => ({ status: 'completed', totalAttempts: attemptCount })
  });
});