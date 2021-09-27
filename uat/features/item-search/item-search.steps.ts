import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps';


Given('die Kundin befindet sich auf der Seite Item-Suche', () => {
  cy.visit('/');
  cy.contains('.search__head', 'Search Items');
});


Given('die Kundin den Button {string} betätigt', (buttonLabel: string) => {
  /*
    TODO: Replace intercept w/ CDC-based mock
  */
  cy.intercept('GET', '/items*', {
    statusCode: 200,
    body: [
      {
        name: 'Item1',
        price: 4,
        available: 1
      },
      {
        name: 'Item2',
        price: 5,
        available: 2
      },
      {
        name: 'Item3',
        price: 6,
        available: 3
      },
    ]
  });
  cy.contains('.search__head', buttonLabel);
  cy.get('button').click();
});

Then('werden {int} Items angezeigt', (count: number) => {
  cy.contains('.search__results', `Number of items retrieved: ${count}`);
  cy.get('.search__results').find('tr').should('have.length', count);
});
