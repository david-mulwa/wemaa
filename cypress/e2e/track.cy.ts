describe('Track Page', () => {
  beforeEach(() => {
    cy.visit('/Track'); // Adjust the URL to match the route of the Track page in your application
  });

  it('should display the form with all necessary elements', () => {
    cy.get('form').should('be.visible').within(() => {
      cy.get('span').contains('Enter the Consignment No.').should('be.visible');
      cy.get('input[name="track"]').should('have.attr', 'placeholder', 'track your cargo using the waybill').and('be.visible');
      cy.get('button[type="submit"]').contains('Track Cargo').should('be.visible');
      cy.get('span').contains('Ex:WPSCWEMA12345').should('be.visible');
    });
  });

  it('should update input value when typing', () => {
    const testValue = 'WPSCWEMA12345';
    cy.get('input[name="track"]').type(testValue).should('have.value', testValue);
  });

  it('should show loading state when form is submitted', () => {
    cy.get('input[name="track"]').type('WPSCWEMA12345');
    cy.get('button[type="submit"]').click();
    cy.get('button[type="submit"]').contains('Tracking....').should('be.visible');
  });

  it('should call handleSubmit when the form is submitted', () => {
    cy.get('input[name="track"]').type('WPSCWEMA12345');
    cy.get('button[type="submit"]').click();
    cy.get('form').should('have.attr', 'data-loading', 'true'); // Assuming you add a data attribute or similar to indicate form submission
  });
});
