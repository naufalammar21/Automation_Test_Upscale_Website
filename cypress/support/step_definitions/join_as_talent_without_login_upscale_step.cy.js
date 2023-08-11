import 'cypress-iframe';
import 'cypress-xpath'

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I visit website upscale#8',()=>{
    // cy.clearCookies();
    cy.visit('https://upscale.edudev.xyz/')
    
})

When('I Start Request join as talent  upscale#8',()=>{


    cy.xpath("//div[@class='col-lg-6 align-center align-center-md fade-in']/a[contains(.,'Join as Talent')]").click()

    cy.on('uncaught:exception', (err, runnable) => {
        if(err.message.includes('Unexpected token')){
           console.log('Application Error Javascript Token')
           return false;
        }
        return true
    })

    cy.xpath("//div[@id='register_main']//input[@name='username']").type('Ed Sheeran')
    cy.xpath("//div[@id='register_main']//input[@id='Email']").type('edsheeran@gmail.com')
    cy.xpath("//div[@id='register_main']//input[@name='password']").type('shape of you')
    cy.xpath("//div[@id='register_main']//input[@name='password_confirmation']").type('shape of you')
    cy.xpath("//select[@id='country_code']").select('Indonesia (+62)')
    // cy.get('#country_code').select('Indonesia (+62)')
    cy.xpath("//div[@id='register_main']//input[@id='Number']").type('081477898675')
    cy.xpath("//input[@id='refrensi']").type('Facebook')
    

     
})

Then('I submit all data and validation registration upscale#8',()=>{
    cy.xpath("//a[contains(.,'DAFTAR')]").click()
})