import 'cypress-iframe';
import 'cypress-xpath'

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open website upscale#1.7',()=>{
    cy.clearCookies();
    cy.visit('https://upscale.edudev.xyz/')
})

When('I click login menu upscale#1.7',()=>{
    cy.get('.btn-login').click()
})

When('I click hyperlink registration upscale#1.7',()=>{
  cy.xpath("//a[contains(.,'Click')]").click()  
})


When('I Fill Registration Form upscale#1.7',()=>{

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
    cy.xpath("//div[@id='register_main']//input[@name='password_confirmation']").type('Konami123')
    cy.xpath("//select[@id='country_code']").select('Indonesia (+62)')

    cy.xpath("//div[@id='register_main']//input[@id='Number']").type(phone_number())

    function phone_number() {
        var phone_text = "";
        var phone_possible = "1234567890";
      
        for (var i = 0; i < 11; i++)
            phone_text += phone_possible.charAt(Math.floor(Math.random() * phone_possible.length));
      
        return phone_text;
    }

    cy.xpath("//input[@id='refrensi']").type('Telegram')

    cy.xpath("//a[contains(.,'DAFTAR')]").click()

})

When('I continue Fill Regist as Talent Form upscale#1.7',()=>{

    function fill_name() {
        var fill_name_text = "";
        var fill_name_possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";
    
        for (var i = 0; i < 10; i++)
          fill_name_text += fill_name_possible.charAt(Math.floor(Math.random() * fill_name_possible.length));
    
        return fill_name_text;
    }
    cy.xpath("//div[@class='question_box first show_box']//input[@name='name']").type(fill_name())
    cy.xpath("//input[@name='talent_address']").type('Las Vegas')  
    cy.xpath("//input[@name='tempat_lahir']").type("Texas")

    function year_date() {
        var year_text = "";
        var year_possible = "1234567890";
      
        for (var i = 0; i < 3; i++)
            year_text += year_possible.charAt(Math.floor(Math.random() * year_possible.length));
      
        return year_text;
    }

    function month_date() {
        var month_text = "";
        var month_possible = "1234567890";
      
        for (var i = 0; i < 1; i++)
            month_text += month_possible.charAt(Math.floor(Math.random() * month_possible.length));
      
        return month_text<12;
    }

    function day_date() {
        var day_text = "";
        var day_possible = "1234567890";
      
        for (var i = 0; i < 1; i++)
            day_text += day_possible.charAt(Math.floor(Math.random() * day_possible.length));
      
        return day_text<12;
    }


    cy.xpath("//input[@id='tgl_lahir']").type(year_date()+'-'+month_date()+'-'+day_date())

    cy.xpath("//select[@name='gender']").select('Laki-laki')

    
    
})
 
Then('I click Lanjutkan Daftar Button upscale#1.7',()=>{
    cy.xpath("//a[contains(.,'Lanjutkan Daftar')]").click() 
  })


