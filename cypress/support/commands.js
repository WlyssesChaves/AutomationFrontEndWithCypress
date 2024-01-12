

  // Commands for Vehicle Data form
  Cypress.Commands.add('fillVehicleData', (vehicleData) => {
    cy.get('#make').select(vehicleData.make);
    cy.get('#model').select(vehicleData.model);
    cy.get('#cylindercapacity').type(vehicleData.cylindercapacity);
    cy.get('#engineperformance').type(vehicleData.enginePerformance);
    cy.get('#dateofmanufacture').type(vehicleData.dateOfManufacture);
    cy.get('#numberofseats').select(vehicleData.numberOfSeats);
    cy.get(`input[name='Right Hand Drive'][value='${vehicleData.righthanddriveyes}'] + span`).click();
    cy.get('#numberofseatsmotorcycle').select(vehicleData.numberofseatsmotorcycle);
    cy.get('#fuel').select(vehicleData.fuelType);
    cy.get('#payload').type(vehicleData.payload);
    cy.get('#totalweight').type(vehicleData.totalweight);
    cy.get('#listprice').type(vehicleData.listPrice);
    cy.get('#annualmileage').type(vehicleData.annualMileage);
  });
  
  // Commands for Insurant Data form
  Cypress.Commands.add('fillInsurantData', (insurantData) => {
    cy.get('#firstname').type(insurantData.firstName);
    cy.get('#lastname').type(insurantData.lastName);
    cy.get('#birthdate').type(insurantData.dateOfBirth);
    cy.get(`input#gender${insurantData.gender} + span`).click();
    cy.get('#streetaddress').type(insurantData.streetAddress);
    cy.get('#country').select(insurantData.country);
    cy.get('#zipcode').type(insurantData.zipcode);
    cy.get('#city').type(insurantData.city);
    cy.get('#occupation').select(insurantData.occupation);
    insurantData.hobbies.forEach(hobby => {
      cy.get(`input[name='Hobbies'][value='${hobby}'] + span`).click();
    });
    cy.get('#website').type(insurantData.website);
  });
  
  // Commands for Product Data form
  Cypress.Commands.add('fillProductData', (productData) => {
    cy.get('#startdate').type(productData.startDate);
    cy.get('#insurancesum').select(productData.insuranceSum);
    cy.get('#meritrating').select(productData.meritRating);
    cy.get('#damageinsurance').select(productData.damageInsurance);
    productData.optionalProducts.forEach(product => {
      cy.get(`input[name='Optional Products[]'][id='${product}'] + span`).click();
    });
    cy.get('#courtesycar').select(productData.courtesyCar);
  });
  
  // Command to select a price option
  Cypress.Commands.add('selectPriceOption', (priceOption) => {
    cy.get(`input[name='Select Option'][value='${priceOption}'] + span`).click();
  });
  
  // Commands for Send Quote form
  Cypress.Commands.add('fillSendQuoteForm', (quoteData) => {
    cy.get('#email').type(quoteData.email);
    cy.get('#phone').type(quoteData.phone);
    cy.get('#username').type(quoteData.username);
    cy.get('#password').type(quoteData.password);
    cy.get('#confirmpassword').type(quoteData.password);
    cy.get('#Comments').type(quoteData.comments);
  });

  Cypress.Commands.add('pressAndValidNextTab', (tabName) =>  {  
    switch (tabName) {
        case "Enter Insurant Data":
            cy.get('#nextenterinsurantdata').click();            
            break;
        case "Enter Product Data":
            cy.get('#nextenterproductdata').click();            
            break;
        case "Select Price Option":
            cy.get('#nextselectpriceoption').click();            
            break;
        case "Send Quote":
            cy.get('#nextsendquote').click();            
            break;
        default:
            break;
    }
  });

  Cypress.Commands.add('validTabName', (tabName) =>  {  
    switch (tabName) {
        case "Enter Insurant Data":
            cy.get('#enterinsurantdata').contains(tabName);            
            break;
        case "Enter Product Data":
            cy.get('#enterproductdata').contains(tabName);            
            break;
        case "Select Price Option":
            cy.get('#selectpriceoption').contains(tabName);            
            break;
        case "Send Quote":
            cy.get('#sendquote').contains(tabName);            
            break;
        default:
            break;
    }
  });