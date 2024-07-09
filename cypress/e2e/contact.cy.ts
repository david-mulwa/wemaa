describe('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/Contact');
  });

  it('should display the form and input fields', () => {
    cy.get('form').should('be.visible');
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="phone"]').should('be.visible');
    cy.get('textarea[name="message"]').should('be.visible');
    cy.get('button[type="submit"]').contains('Send').should('be.visible');
  });

  it('should display the contact information cards', () => {
    cy.get('div.grid > div.card').each(($el, index) => {
      cy.wrap($el).find('span').should('be.visible');
      cy.wrap($el).find('h1').should('be.visible');
      cy.wrap($el).find('p').should('be.visible');
    });
  });

  it('should allow form submission', () => {
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="phone"]').type('1234567890');
    cy.get('textarea[name="message"]').type('This is a test message.');
    cy.get('button[type="submit"]').contains('Send').click();

    // Assuming there is an alert or a success message after form submission
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Thank you. I will get back to you as soon as possible');
    });
  });
});
