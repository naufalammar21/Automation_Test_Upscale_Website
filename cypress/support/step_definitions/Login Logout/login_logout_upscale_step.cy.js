const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open login page upscale#1.4',()=>{
    cy.clearCookies();
    // cy.visit('https://upscale.edudev.xyz/')
    cy.visit('https://www.google.com')
})

When('I click login menu upscale#1.4',()=>{
    // cy.get('.btn-login').click()
    // cy.xpath("//input[@id='txt-password']").type('123')

})

When('I fill the login form upscale#1.4',()=>{
    // cy.get('#email').type('ammarhtr@gmail.com')
    // cy.get('.col-lg-8 > #Password').type('Fu86MEhYLAWhnBidfKm4')
   
    
})

When('I click login button#1.4',()=>{
    // cy.get('#login').click()  
})

Then('I click logout button#1.4',()=>{
    // cy.xpath("//a[contains(.,'Hello Naufal Ammar')]").eq(0).trigger('mouseover')  
    // cy.pause()
    
})