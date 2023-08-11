import 'cypress-iframe';
import 'cypress-xpath'

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I visit website upscale#7',()=>{
    cy.clearCookies();
    cy.visit('https://upscale.edudev.xyz/')
    
})

When('I Start Apply jobs  upscale#7',()=>{

    cy.xpath("//a[.='Jobs']").click()
    cy.xpath("//a[@href='https://upscale.edudev.xyz/lowongan-52-3.-Backend-Engineer-(GO)']").click()

     
})

Then('I submit all data and validation registration upscale#7',()=>{
    cy.xpath("//button[@class='btn btn-sm btn-circle']").click()
})