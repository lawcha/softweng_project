

describe('Filters', () => {
  it('filter by rating', () => {
    cy.visit('http://localhost:8080');
    cy.get('.v-navigation-drawer .mdi-star')
        .click();
    cy.get('#main-content .v-rating').each(($el, i, $list) => {
      if (i > 0) {
        let prev = Cypress.$($list[i-1]).find('.mdi-star[style]').length;
        let curr = $el.find('.mdi-star[style]').length;
        expect(curr).lte(prev);
      }
    });
  })
  it('filter by alphabetical', () => {
    cy.visit('http://localhost:8080');
    cy.get('.v-navigation-drawer .mdi-sort-alphabetical-variant')
        .click();
    cy.get('#main-content .v-card__title').then($elems => {
      let titles = [];
      $elems.each((i, $el) => titles.push($el.innerText));
      cy.wrap(titles).should("equal", titles.sort());
    });
  })
});
