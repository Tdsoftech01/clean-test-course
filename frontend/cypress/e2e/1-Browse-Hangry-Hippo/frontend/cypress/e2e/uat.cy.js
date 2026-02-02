it('displays correct options for Handhelds and Appeteasers', () => {
  cy.visit('http://localhost:3000'); // Use your app's local URL

  // Click Handhelds and check for its items
  cy.contains('Handhelds').click();
  cy.contains('Cheese Burger').should('exist');
  cy.contains('Fajita Tacos').should('exist');

  // Click Appeteasers and check for its items
  cy.contains('Appeteasers').click();
  cy.contains('Tater Tots').should('exist');
  cy.contains('Buffalo Wings').should('exist');

  // Make sure Handhelds items are no longer visible
  cy.contains('Cheese Burger').should('not.exist');
  cy.contains('Fajita Tacos').should('not.exist');
});