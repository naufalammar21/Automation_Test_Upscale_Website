import 'cypress-iframe';
import 'cypress-xpath'

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');


const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1; 
const currentDay = currentDate.getDate();
const randomYear = currentYear - 1; 
const randomMonth = Math.floor(Math.random() * 12) + 1; 
const randomDay = Math.floor(Math.random() * 28) + 1; 
const randomDate = `${randomYear}-${randomMonth.toString().padStart(2, '0')}-${randomDay.toString().padStart(2, '0')}`;

function random_text() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

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

    

    cy.xpath("//div[@id='register_main']//input[@name='username']").type(random_text())
    cy.xpath("//div[@id='register_main']//input[@id='Email']").type(random_text()+'@gmail.com')
    cy.xpath("//div[@id='register_main']//input[@name='password']").type('Konami123')
    cy.xpath("//div[@id='register_main']//input[@name='password_confirmation']").type('Konami123')
    cy.xpath("//select[@id='country_code']").select('Indonesia (+62)')
    function field_number() {
        var number_text = "";
        var number_possible = "1234567890";
      
        for (var i = 0; i < 11; i++)
            number_text += number_possible.charAt(Math.floor(Math.random() * number_possible.length));
      
        return number_text;
    }
    cy.xpath("//div[@id='register_main']//input[@id='Number']").type(field_number())
    cy.xpath("//input[@id='refrensi']").type('Telegram')
    cy.xpath("//a[contains(.,'DAFTAR')]").click()

})

When('I continue Fill Regist as Talent Form upscale#1.7',()=>{

    cy.xpath("//div[@class='question_box first show_box']//input[@name='name']").type(random_text())
    cy.xpath("//input[@name='talent_address']").type('Las Vegas')  
    cy.xpath("//input[@name='tempat_lahir']").type("Texas")
    cy.xpath("//input[@id='tgl_lahir']").type(randomDate);
    const randomGender = Math.random() < 0.5 ? 'Laki-laki' : 'Perempuan';
    cy.xpath("//select[@name='gender']").select(randomGender);
    cy.xpath("//a[contains(.,'Lanjutkan Daftar')]").click()

})
 
When('I Fill The Working Experience Field upscale#1.7',()=>{

    const workingExperience = Math.random() < 0.5 ? 'sudah' : 'belum';
    // Select option in the first dropdown
    cy.xpath("//select[@id='pengalaman_option']").select(workingExperience);

    if (workingExperience === 'sudah') {
        cy.xpath("//input[@id='start_career']").type(randomDate)

        const options = ['Junior', 'Middle', 'Senior'];
        const randomIndex = Math.floor(Math.random() * options.length);
        const selectedOption = options[randomIndex];
        cy.xpath("//select[@name='talent_level']").select(selectedOption);
        cy.xpath("//select[@name='talent_focus']").select(0)
        cy.xpath("//a[contains(.,'Selanjutnya')]").click()
    }
    
    else if (workingExperience === 'belum') {
        const edu_options = ['yes','no'];
        const edu_randomIndex = Math.floor(Math.random() * edu_options.length);
        const edu_selectedOption = edu_options[edu_randomIndex];
        cy.xpath("//select[@name='talent_isa']").select(edu_selectedOption)
        cy.xpath("//select[@name='talent_focus']").select(0)
        cy.xpath("//a[contains(.,'Selanjutnya')]").click()
    }


})

Then('I Fill Web Development Experience Field upscale#1.7',()=>{

    const webdev = Math.random() < 0.5 ? 'ya' : 'tidak';
    cy.xpath("//select[@id='web_option']").select('ya')

    if (webdev == 'ya' ) {
        
        cy.xpath("//div[@class='fstElement fstMultipleMode fstResultsOpened fstActive']/div[@class='fstControls']").click()
        cy.xpath("//span[@class='fstResultItem fstSelected']").click()
        cy.get('span:nth-of-type(5)').click()
        cy.xpath("//span[.='PHP']").click()
        cy.xpath("//span[.='Ruby']").click()
        cy.xpath("//span[.='Yii']").click()
        cy.pause()
        
        // cy.get('span:nth-of-type(14)').click()
        
        cy.xpath("//a[contains(.,'Selanjutnya')]").click()

    }

    else{
        cy.xpath("//a[contains(.,'Selanjutnya')]").click()
    }

})


