/**
 * Custom command to wait for wishlist page to be fully loaded
 * This command ensures the page is ready before running assertions
 */
Cypress.Commands.add('waitForWishlistPageLoaded', () => {
  // Wait for generic loading to disappear
  cy.get('body').should('not.contain', 'Loading...');

  // Ensure we're on the wishlist page
  cy.url().should('include', '/wishlist');

  // Wait for the wishlist wrapper to exist (but don't check visibility since it can have height: 0)
  cy.get('.commerce-wishlist-wrapper').should("exist");

  // Add comprehensive debugging when page seems stuck
  cy.window().then(win => {
    // Log localStorage state
    cy.log('=== DEBUGGING STUCK LOADING ===');
    cy.log('localStorage keys:', Object.keys(win.localStorage));
    cy.log('DROPIN__WISHLIST__WISHLIST__DATA:', win.localStorage.getItem('DROPIN__WISHLIST__WISHLIST__DATA'));

    // Log any JavaScript errors
    cy.log('JavaScript errors on page:', win.console?.error?.length || 'none detected');

    // Log DOM state
    const loaderHeading = win.document.querySelector('[data-testid="loader-wishlist-heading"]');
    const skeletonLoader = win.document.querySelector('[data-testid="wishlist-loader"]');
    const emptyWishlist = win.document.querySelector('[data-testid="empty-wishlist"]');
    const wishlistHeading = win.document.querySelector('[data-testid="default-wishlist-heading"]');

    cy.log('DOM Elements Present:', {
      loaderHeading: !!loaderHeading,
      skeletonLoader: !!skeletonLoader,
      emptyWishlist: !!emptyWishlist,
      wishlistHeading: !!wishlistHeading
    });

    // Log network requests if available
    if (win.performance) {
      const resources = win.performance.getEntriesByType('resource');
      const pendingResources = resources.filter(r => !r.responseEnd);
      cy.log('Pending network requests:', pendingResources.length);
    }
  });

  // Wait for actual content to appear (either wishlist items or empty state)
  // This will use the full 60-second timeout to wait for loading to complete
  cy.get('body').should($body => {
    const hasWishlistHeading = $body.find('[data-testid="default-wishlist-heading"]').length > 0;
    const hasEmptyWishlist = $body.find('[data-testid="empty-wishlist"]').length > 0;
    const hasWishlistItems = $body.find('.wishlist-product-item').length > 0;

    // At least one of these should be present when loading is complete
    expect(hasWishlistHeading || hasEmptyWishlist || hasWishlistItems).to.be.true;
  });
});