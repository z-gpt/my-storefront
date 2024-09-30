Cypress.Commands.add('setSessionStorage', (key, value) => {
  cy.window().then((window) => {
    window.sessionStorage.setItem(key, value);
  });
});

// Set session storage before all tests
before(() => {
  // cy.visit('/');
  cy.setSessionStorage('environment', 'stage');
});
