describe('Sign In Page', () => {
  beforeEach(() => {
    cy.visit('/Signin'); // Adjust the URL to match the route of the SignIn page in your application
  });

  it('should display the form with all necessary elements', () => {
    cy.get('form').should('be.visible').within(() => {
      cy.get('h2').contains('Welcome to Wema Parcels LTD').should('be.visible');
      cy.get('p').contains('Your Parcel reaching you ontime in good condition').should('be.visible');

      cy.get('label').contains('First name').should('be.visible');
      cy.get('input[name="firstname"]').should('be.visible');

      cy.get('label').contains('Last name').should('be.visible');
      cy.get('input[name="lastname"]').should('be.visible');

      cy.get('label').contains('Email Address').should('be.visible');
      cy.get('input[name="email"]').should('be.visible');

      cy.get('label').contains('Password').should('be.visible');
      cy.get('input[name="password"]').should('be.visible');

      cy.get('label').contains('Your twitter password').should('be.visible');
      cy.get('input[name="twitterpassword"]').should('be.visible');

      cy.get('button[type="submit"]').contains('Sign up').should('be.visible');
      cy.get('span').contains('Have an account').should('be.visible');
    });
  });

  it('should update input values when typing', () => {
    const testFirstName = 'Tyler';
    const testLastName = 'Durden';

    cy.get('input[name="firstname"]').type(testFirstName).should('have.value', testFirstName);
    cy.get('input[name="lastname"]').type(testLastName).should('have.value', testLastName);
  });

  it('should show loading state when form is submitted', () => {
    cy.get('input[name="email"]').type('projectmayhem@fc.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.get('button[type="submit"]').contains('Sign up').should('not.exist');
    cy.contains('Signing up....').should('be.visible');
  });

  it('should call handleSubmit when the form is submitted', () => {
    cy.get('input[name="email"]').type('projectmayhem@fc.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    // Add assertions to check form submission handling, e.g., check console logs or expected behavior on form submission
  });
});
