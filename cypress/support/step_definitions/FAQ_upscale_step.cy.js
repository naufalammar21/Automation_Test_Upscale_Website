import 'cypress-xpath'
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open website upscale#9',()=>{
    cy.clearCookies();
    cy.visit('https://upscale.edudev.xyz/')
})

When('I click F.A.Q menu upscale#9',()=>{
    cy.xpath("//a[.='F.A.Q']").click()
})

When('I open the question upscale#9',()=>{
    cy.xpath("//a[.='Skala perusahaan yang cocok menggunakan Upscale ?']").click()
})

Then('I validation text in question upscale#9',()=>{
    cy.contains('Service kami cocok untuk segala level perusahaan, baik UKM, Startup maupun corporate').should('be.visible')  
})