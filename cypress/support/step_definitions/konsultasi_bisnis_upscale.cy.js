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
    function user_name() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    
        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
    }

    function phone_number() {
        var phone = "";
        var possible_phone_number = "1234567890";
    
        for (var i = 0; i < 11; i++)
          phone += possible_phone_number.charAt(Math.floor(Math.random() * possible_phone_number.length));
    
        return phone;
    }

    cy.xpath("//input[@id='name']").type(user_name())
    cy.get('#phone').type(phone_number())
    cy.xpath("//form[@id='form-complete']//input[@id='email']").type(user_name()+'@gmail.com')
    cy.get('#messagge').type('i just try using message feature')
    cy.xpath("//button[@class='btn btn-sm btn-circle']").click()
})