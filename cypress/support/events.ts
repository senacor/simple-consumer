Cypress.on('uncaught:exception', (error, runnable) => {
  console.log(JSON.stringify(error));
  // returning false here prevents Cypress from
  // failing the test
  throw error; // throw error to have test still fail
});

