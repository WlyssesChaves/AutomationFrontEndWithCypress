import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';


// Contexto
Given('the user access the website', () => {
    const urlBase = Cypress.config('baseUrl');
    cy.visit(urlBase);
    cy.get('.main-navigation').contains('Automobile');
});

before(function () {
    cy.fixture('insuranceQuoteData.json').as('formData');
  });

  // STEP1
  When('the user fills out the Vehicle Data form', function () {
    cy.fillVehicleData(this.formData.vehicleData);
  });
  
  // STEP2
  When('the user fills out the Insurant Data form', function () {
    cy.fillInsurantData(this.formData.insurantData);
  });
  
  // STEP3
  When('the user fills out the Product Data form', function () {
    cy.fillProductData(this.formData.productData);
  });
  
  // STEP4
  When('the user selects a price option', function () {
    cy.selectPriceOption(this.formData.priceOption.selection);
  });

  // STEP5
  When('the user fills out the Send Quote form', function () {
    cy.fillSendQuoteForm(this.formData.quoteData);
  });

  And('press Next to {string}', (tabName) => {
      cy.pressAndValidNextTab(tabName)
  });

  Then('the {string} tab should be displayed', (tabName) => {
      cy.validTabName(tabName)
  });

  And('the user clicks the Send button on the Send Quote tab', () => {
      cy.get('#sendemail').click();
    });
    
  Then('a success message should be displayed', () => {
      cy.get('.sweet-alert').should('be.visible').and('contain', 'Sending e-mail success!');
      cy.get('.sweet-alert').find('h2').should('have.text', 'Sending e-mail success!');
  });
    


  