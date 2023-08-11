const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open login page upscale#1.2',()=>{
    cy.clearCookies();
    cy.visit('https://upscale.edudev.xyz/')
})

When('I click login menu upscale#1.2',()=>{
    cy.get('.btn-login').click()
})

When('I fill the login form upscale#1.2',()=>{
    cy.get('#email').type('ammarhtr@gmail.com')
    cy.get('.col-lg-8 > #Password').type('Fu86MEhYLAWhnBidfKm4')
    
})

Then('I click login button#1.2',()=>{
    cy.get('#login').click()  
})