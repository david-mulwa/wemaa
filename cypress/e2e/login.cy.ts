describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/Login');
  });

  it('should display the login form', () => {
    cy.get('form').should('be.visible');
    cy.get('input#email').should('be.visible');
    cy.get('input#password').should('be.visible');
    cy.get('button[type="submit"]').contains('Log In').should('be.visible');
  });

  it('should display the welcome message', () => {
    cy.contains('h2', 'Welcome to Wema Parcels LTD').should('be.visible');
    cy.contains('p', 'Your Parcel reaching you ontime in good condition').should('be.visible');
  });

  it('should allow form submission', () => {
    cy.get('input#email').type('test@example.com');
    cy.get('input#password').type('password123');
    cy.get('button[type="submit"]').contains('Log In').click();

    // Assuming form submission redirects or shows a message
    cy.url().should('include', '/dashboard'); // Replace with the actual redirection URL
  });

  it('should display social login buttons', () => {
    cy.get('button').contains('Google').should('be.visible');
    cy.get('button').contains('Yahoo').should('be.visible');
  });

  it('should navigate to Sign Up page', () => {
    cy.contains("Don't Have an account").find('a').click();
    cy.url().should('include', '/signin'); // Replace with the actual URL for Sign Up page
  });
});
