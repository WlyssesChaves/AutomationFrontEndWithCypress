# Insurance Quote Automation Tests

This project contains automated tests for the Insurance Quote application using Cypress with the Cucumber plugin for BDD-style testing.

## Automated Features

The following features of the Insurance Quote application have been automated:

- **Vehicle Data Form**: Automates the entry of vehicle-related data.
- **Insurant Data Form**: Automates the entry of insurance applicant data.
- **Product Data Form**: Automates the entry of insurance product-related data.
- **Price Option Selection**: Automates the selection of a price option.
- **Send Quote Form**: Automates the sending of a quote with user data.

## Prerequisites

- Node.js
- npm or Yarn
- Cypress installed globally or in your project

## Installation

To set up the test environment, follow these steps:

1. Clone the repository:
git clone <repository-url>

2. Install the dependencies:
npm install

## Running Tests

To run the tests with the Cypress Test Runner, use:
npx cypress open

Or to run the tests headlessly:
npx cypress run

## Test Data

Test data is located in the `cypress/fixtures` directory. Update the `insuranceQuoteData.json` file to change the test data used by the tests.

## Custom Commands

Custom commands are defined in `cypress/support/commands.js`. These commands are used to abstract repetitive tasks in tests and can be modified as needed.

## Continuous Integration

This project can be integrated into CI/CD pipelines. For running tests in CI, make sure to add the necessary configuration in your `cypress.json` and CI provider's configuration file.