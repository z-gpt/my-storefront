/**
 * Custom command to wait for wishlist page to be fully loaded
 * This command ensures the page is ready before running assertions
 */
Cypress.Commands.add('waitForWishlistPageLoaded', () => {
  // Wait for loading to disappear
  cy.get('body').should('not.contain', 'Loading...');

  // Ensure we're on the wishlist page
  cy.url().should('include', '/wishlist');

  // Wait for the wishlist wrapper to exist (but don't check visibility since it can have height: 0)
  cy.get('.commerce-wishlist-wrapper').should("exist");
  
  // Wait for either wishlist content or empty state to be rendered
  // This ensures the localStorage data has been processed
  cy.get('body').then($body => {
    if ($body.find('[data-testid="default-wishlist-heading"]').length > 0) {
      // Wishlist has items - wait for heading to be visible
      cy.get('[data-testid="default-wishlist-heading"]').should('be.visible');
    } else if ($body.find('.dropin-illustrated-message__heading').length > 0) {
      // Empty state - wait for empty message to be visible
      cy.get('.dropin-illustrated-message__heading').should('be.visible');
    } else {
      // Neither found yet - wait longer and try different approaches
      cy.log('Neither wishlist content nor empty state found, waiting longer...');
      
      // Debug localStorage state
      cy.window().then(win => {
        cy.log('localStorage state:', JSON.stringify(win.localStorage));
        console.log('localStorage state:', JSON.stringify(win.localStorage));
      });
      
      // Wait for localStorage to be processed
      cy.wait(2000);
      
      // Now wait for any of the expected elements to appear (with retries)
      cy.get('body').should($body => {
        const hasWishlistHeading = $body.find('[data-testid="default-wishlist-heading"]').length > 0;
        const hasEmptyMessage = $body.find('.dropin-illustrated-message__heading').length > 0;
        const hasWishlistItems = $body.find('.wishlist-product-item').length > 0;
        
        // This will retry until one of these conditions is true
        expect(hasWishlistHeading || hasEmptyMessage || hasWishlistItems).to.be.true;
      });
    }
  });
}); 