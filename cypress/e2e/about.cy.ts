describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/About');
  });

  it('should display the image and text for "Become Our Partners"', () => {
    cy.get('img[alt="agree"]').should('be.visible');
    cy.get('h3').contains('Become Our Partners').should('be.visible');
    cy.get('p').contains('Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit').should('be.visible');
    cy.get('p').contains('Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam.').should('be.visible');
    cy.get('a[href="/Contact"]').contains('Contact Us').should('be.visible');
  });

  it('should display the "Our clients" section', () => {
    cy.get('h2').contains('Our clients').should('be.visible');
    cy.get('p').contains('Providing logistics solutions to leading brands').should('be.visible');
  });

  it('should display all client logos', () => {
    cy.get('div.flex.w-full.items-center.justify-between.flex-wrap > div').each(($el, index) => {
      cy.wrap($el).should('be.visible');
    });
  });
});
