describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the main heading', () => {
    cy.get('h2').contains('INDUSTRY LEADING LOGISTIC FIRM').should('be.visible');
  });

  it('should display the contact and discover buttons', () => {
    cy.get('a[href="/Contact"]').should('be.visible').and('contain', 'Contact Us');
    cy.get('a[href="/Services"]').should('be.visible').and('contain', 'Discover More');
  });

  it('should display home cards', () => {
    cy.get('.card').should('have.length', 7); // Assuming there are 4 cards
    cy.get('.card').each(($card, index) => {
      cy.wrap($card).should('be.visible');
      cy.wrap($card).find('p').should('be.visible');
    });
  });

  it('should display services section', () => {
    cy.get('.card').should('have.length', 7); // Assuming there are 3 services
    cy.get('.card').each(($card, index) => {
      cy.wrap($card).should('be.visible');
      cy.wrap($card).find('p').should('be.visible');
    });
  });

  it('should display testimonial section', () => {
    cy.get('h6').contains('OUR TESTIMONIAL').should('be.visible');
    cy.get('h3').contains('What customers say about us').should('be.visible');
    cy.get('p').contains('We revolutionize the way sales teams interact with customers. Our success has been driven by your passion for great selling.').should('be.visible');
  });

  it('should display progress bars', () => {
    cy.get('progress').should('have.length', 4); // Adjust the length as per the actual number
    cy.get('progress').each(($progress, index) => {
      cy.wrap($progress).should('have.attr', 'max', '100');
    });
  });

  it('should display our year in numbers section', () => {
    cy.get('h1').contains('Our Year In Numbers').should('be.visible');
    cy.get('p').contains('We revolutionize the way sales teams interact with customers. Our success has been driven by your passion for great selling.').should('be.visible');
  });
});
