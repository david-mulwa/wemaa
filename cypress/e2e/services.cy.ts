describe('Services Page', () => {
  beforeEach(() => {
    cy.visit('/services'); // Adjust the URL to match the route of the Services page in your application
  });

  it('should display the Sertag component', () => {
    cy.get('.mt-6').should('be.visible');
  });

  it('should display the services', () => {
    cy.get('.xl\\:grid-cols-3 .card').should('have.length.greaterThan', 0);

    cy.get('.xl\\:grid-cols-3 .card').each(($card) => {
      cy.wrap($card).find('img').should('have.attr', 'src');
      cy.wrap($card).find('h3').should('have.class', 'text-2xl').and('have.class', 'font-bold');
      cy.wrap($card).find('p').should('exist');
      cy.wrap($card).find('a').contains('Get Quatation').should('have.attr', 'href', '/Contact');
    });
  });

  it('should display the progress bars', () => {
    cy.get('.flex.gap-5 .xl\\:w-\\[69%\\] .group').should('have.length.greaterThan', 0);

    cy.get('.flex.gap-5 .xl\\:w-\\[69%\\] .group').each(($group) => {
      cy.wrap($group).find('label').within(() => {
        cy.get('span').first().should('have.class', 'font-bold').and('have.class', 'text-xl');
        cy.get('span').last().should('have.class', 'font-bold').and('have.class', 'text-xl');
      });
      cy.wrap($group).find('progress').should('have.attr', 'max', '100');
    });
  });

  it('should display "Our Year In Numbers" section', () => {
    cy.get('.flex.flex-col.w-full.xl\\:w-\\[31%\\]').within(() => {
      cy.get('h1').should('have.class', 'text-3xl').and('have.class', 'font-bold').and('contain', 'Our Year In Numbers');
      cy.get('p').should('have.class', 'text-balance').and('have.class', 'text-lg');
    });
  });

  it('should navigate to the Contact page when "Get Quatation" button is clicked', () => {
    cy.get('.xl\\:grid-cols-3 .card').first().find('a').contains('Get Quatation').click();
    cy.url().should('include', '/Contact');
  });
});
