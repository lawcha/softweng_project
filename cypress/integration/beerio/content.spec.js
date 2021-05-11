

describe('Content', () => {
  it('lorem-ipsum free', () => {
    cy.visit('http://localhost:8080');
    cy.get('html:contains(\'Lorem ipsum\')').should('not.exist');
  });
});
