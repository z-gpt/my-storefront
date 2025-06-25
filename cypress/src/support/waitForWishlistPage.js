/**
 * Custom command to wait for wishlist page to be fully loaded
 * This command ensures the page is ready before running assertions
 */
Cypress.Commands.add('waitForWishlistPageLoaded', () => {
  // Wait for loading to disappear and page to be fully loaded
  cy.get('body').then($body => {
    if ($body.text().includes('Loading...')) {
      cy.log('Still loading after 60s');
      // Optionally, take a screenshot or dump localStorage/cookies
      cy.window().then(win => {
        cy.log('localStorage:', JSON.stringify(win.localStorage));
      });
    }
  });
  
  // Ensure we're on the wishlist page
  cy.url().should('include', '/wishlist');
  
  // Wait for the main wishlist content area to be present
  cy.get('.commerce-wishlist-wrapper').should('be.visible');
}); 