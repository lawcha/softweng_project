

describe('Categories', () => {
  it('Blond category test', () => {
    cy.visit('http://localhost:8080');
    cy.get('.v-tab:contains(\'Blond\')').focus().click()
    cy.get('#main-content .v-card__subtitle').each($el => {
      cy.wrap($el.text()).should('equal', 'blond');
    });
  });
  it('White category test', () => {
    cy.visit('http://localhost:8080');
    cy.get('.v-tab:contains(\'White\')').focus().click()
    cy.get('#main-content .v-card__subtitle').each($el => {
      cy.wrap($el.text()).should('equal', 'white');
    });
  });
  it('Dark category test', () => {
    cy.visit('http://localhost:8080');
    cy.get('.v-tab:contains(\'Dark\')').focus().click()
    cy.get('#main-content .v-card__subtitle').each($el => {
      cy.wrap($el.text()).should('equal', 'dark');
    });
  });
});
