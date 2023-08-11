import 'cypress-iframe';
import 'cypress-xpath'

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open website upscale#1.6',()=>{
    cy.clearCookies();
    cy.visit('https://upscale.edudev.xyz/')
})

When('I click login menu upscale#1.6',()=>{
    cy.get('.btn-login').click()
})

When('I click hyperlink registration upscale#1.6',()=>{
  cy.xpath("//a[contains(.,'Click')]").click()  
})


When('I Fill Registration Form And I Fill Different Password upscale#1.6',()=>{

    cy.on('uncaught:exception', (err, runnable) => {
        if(err.message.includes('Unexpected token')){
           console.log('Application Error Javascript Token')
           return false;
        }
        return true
    })

    //fill the user name
    cy.xpath("//div[@id='register_main']//input[@name='username']").type(user_name())
    function user_name() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    
        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
    }

    cy.xpath("//div[@id='register_main']//input[@id='Email']").type(email_Alpha()+'@gmail.com')

    

    function email_Alpha() {
        var email_text = "";
        var email_possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
      
        for (var i = 0; i < 10; i++)
            email_text += email_possible.charAt(Math.floor(Math.random() * email_possible.length));
      
        return email_text;
    }

    
    cy.xpath("//div[@id='register_main']//input[@name='password']").type('Konami123')
    cy.xpath("//div[@id='register_main']//input[@name='password_confirmation']").type('Konoha123')
    cy.xpath("//select[@id='country_code']").select('Indonesia (+62)')

    cy.xpath("//div[@id='register_main']//input[@id='Number']").type(phone_number())

    function phone_number() {
        var phone_text = "";
        var phone_possible = "1234567890";
      
        for (var i = 0; i < 11; i++)
            phone_text += phone_possible.charAt(Math.floor(Math.random() * phone_possible.length));
      
        return phone_text;
    }

    cy.xpath("//input[@id='refrensi']").type('Weibo')

    cy.xpath("//a[contains(.,'DAFTAR')]").click()

})

Then('validation Password field and confirm password field has different contains upscale#1.6',()=>{
    cy.contains('Harap isi Konfirmasi Password sama seperti Password').should('be.visible')  
})




