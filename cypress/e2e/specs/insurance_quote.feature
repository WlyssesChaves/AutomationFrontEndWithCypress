Feature: Completing and sending an insurance quotation form
  As a user of the Tricentis website
  The user want to fill out a series of forms
  In order to send an insurance quote

  Background:
    Given the user access the website

  Scenario: Complete form filling and submission of the quote
    # Step 1
    When the user fills out the Vehicle Data form
    And press Next to "Enter Insurant Data"
    Then the "Enter Insurant Data" tab should be displayed

    # Step 2
    When the user fills out the Insurant Data form
    And press Next to "Enter Product Data"
    Then the "Enter Product Data" tab should be displayed

    # Step 3
    When the user fills out the Product Data form
    And press Next to "Select Price Option"
    Then the "Select Price Option" tab should be displayed

    # Step 4
    When the user selects a price option
    And press Next to "Send Quote"
    Then the "Send Quote" tab should be displayed

    # Step 5
    When the user fills out the Send Quote form
    And the user clicks the Send button on the Send Quote tab
    Then a success message should be displayed
