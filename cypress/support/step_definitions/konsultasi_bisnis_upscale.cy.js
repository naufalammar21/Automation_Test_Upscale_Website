import 'cypress-iframe';
import 'cypress-xpath'

const { Given, When,  Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I visit website upscale#5',()=>{
    cy.clearCookies();
    cy.visit('https://upscale.edudev.xyz/')
    
})

When('I Clik For Business Menu  upscale#5',()=>{
    cy.contains('For Business').click()
})

Then('I Fill Konsultasi Bisnis Form upscale#5',()=>{
    cy.xpath("//input[@id='name']").type('Taylor Swift')
    cy.get('#phone').type('087773304588')
    cy.xpath("//form[@id='form-complete']//input[@id='email']").type('taylorswift@gmail.com')
    cy.get('#messagge').type('i just try using message feature')
    cy.xpath("//button[@class='btn btn-sm btn-circle']").click()
})