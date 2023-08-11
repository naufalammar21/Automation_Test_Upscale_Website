const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open login page upscale#1.3',()=>{
    cy.clearCookies();
    cy.visit('https://upscale.edudev.xyz/')
})

When('I click login menu upscale#1.3',()=>{
    cy.get('.btn-login').click()
})

When('I fill the login form upscale#1.3',()=>{
    cy.get('#email').type('naufalammar@ticket.com')
    cy.get('.col-lg-8 > #Password').type('Tes Password')
    cy.get('#login').click()
})

Then('I validation user failed login upscale#1.3',()=>{
  cy.contains('Invalid username or password!')  
})