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

  // Take screenshot before final check for debugging
  cy.screenshot('wishlist-before-final-check', { capture: 'viewport' });

  // Debug step 4: Wait with multiple checks and timeouts
  cy.get('body', { timeout: 30000 }).should($body => {
    const hasWishlistHeading = $body.find('[data-testid="default-wishlist-heading"]').length > 0;
    const hasEmptyWishlist = $body.find('[data-testid="empty-wishlist"]').length > 0;
    const hasWishlistItems = $body.find('.wishlist-product-item').length > 0;

    // Log current state for debugging
    Cypress.log({
      name: 'final-check-attempt',
      message: `Checking content: heading=${hasWishlistHeading}, empty=${hasEmptyWishlist}, items=${hasWishlistItems}`,
      consoleProps: () => ({
        hasWishlistHeading,
        hasEmptyWishlist,
        hasWishlistItems,
        bodyHTML: $body.html().substring(0, 500)
      })
    });

    // At least one of these should be present when loading is complete
    expect(hasWishlistHeading || hasEmptyWishlist || hasWishlistItems).to.be.true;
  });

  // Final success log
  Cypress.log({
    name: 'waitForWishlistPageLoaded',
    message: 'Wishlist page loaded successfully',
    consoleProps: () => ({ status: 'completed' })
  });
});