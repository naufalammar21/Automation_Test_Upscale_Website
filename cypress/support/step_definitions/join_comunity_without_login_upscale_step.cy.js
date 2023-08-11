import 'cypress-iframe';
import 'cypress-xpath'

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');


Given('I visit website upscale#6',()=>{
    cy.clearCookies();
    cy.visit('https://upscale.edudev.xyz/')
    
})

When('I Start Request join Comunity  upscale#6',()=>{

    cy.on('uncaught:exception', (err, runnable) => {
        if(err.message.includes('Unexpected token')){
           console.log('Application Error Javascript Token')
           return false;
        }
        return true
    })
 

    cy.xpath("//a[.='For Talent']").click()
    cy.xpath("//div[@class='col-lg-4 align-right align-left-md fade-in']/a[contains(.,'Join Community')]").click()
    cy.xpath("//div[@id='register_main']//input[@name='username']").type(userID_Alpha())

    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
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


    cy.xpath("//div[@id='register_main']//input[@name='password']").type('shape of you')
    cy.xpath("//div[@id='register_main']//input[@name='password_confirmation']").type('shape of you')
    cy.xpath("//select[@id='country_code']").select('Indonesia (+62)')
    cy.xpath("//div[@id='register_main']//input[@id='Number']").type('081477898675')
    cy.xpath("//input[@id='refrensi']").type('Facebook')
    cy.xpath("//a[contains(.,'DAFTAR')]").click()
    
})

When('I fill Register AS Talent Form upscale#6',()=>{
    cy.xpath("//div[@class='question_box first show_box']//input[@name='name']").type('Duta Karisma')
    cy.xpath("//input[@name='talent_address']").type('Jakarta Selatan')
    cy.xpath("//input[@name='tempat_lahir']").type('Makassar')
    cy.xpath("//input[@id='tgl_lahir']").type('1999-08-07')
    cy.xpath("//select[@name='gender']").select('Laki-laki')
    cy.xpath("//a[contains(.,'Lanjutkan Daftar')]").click()
})

When('I fill The Work Experience Form upscale#6',()=>{

    cy.xpath("//select[@id='pengalaman_option']").select('Belum / Sangat sedikit')
    // cy.xpath("//select[@name='talent_isa']").select(getRandomInt(0,1))
    cy.xpath("//select[@name='talent_isa']").select('Iya')
    cy.xpath("//select[@name='talent_focus']").select(0)
    cy.xpath("//a[contains(.,'Selanjutnya')]").click()

})

When('I fill The Skill Web Development Form upscale#6',()=>{

    cy.xpath("//select[@id='web_option']").select('ya')
    cy.xpath("//div[@class='fstElement fstMultipleMode fstNoneSelected fstResultsOpened fstActive']//input[@class='fstQueryInput fstQueryInputExpanded']").click()
    cy.xpath("//span[.='PHP']").click()
    cy.xpath("//span[.='Codeigniter - CI']").click()
    cy.xpath("//span[.='Fuel PHP']").click()
    cy.xpath("//a[contains(.,'Selanjutnya')]").click()

})

Then('I fill The Skill of Mobile Developer Form upscale#6',()=>{
    cy.xpath("//select[@id='mobile_option']").select(0)
    cy.xpath("//div[@class='fstElement fstMultipleMode fstNoneSelected fstActive fstResultsOpened']//input[@class='fstQueryInput fstQueryInputExpanded']").click()
    cy.xpath("//span[.='React Native']").click()
    cy.xpath("//span[.='Swift']").click()
    cy.xpath("//span[.='Unity']").click()
    cy.xpath("//a[contains(.,'Selanjutnya')]").click()

})
