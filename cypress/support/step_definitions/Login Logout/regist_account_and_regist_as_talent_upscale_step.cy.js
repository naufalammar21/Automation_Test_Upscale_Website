import 'cypress-iframe';
import 'cypress-xpath'

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

// Mendapatkan tanggal saat ini
const currentDate = new Date();

// Mendapatkan tahun, bulan, dan tanggal dari tanggal saat ini
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1; // Ingat: Januari dimulai dari 0
const currentDay = currentDate.getDate();

// Looping untuk mendapatkan tanggal acak dalam 1 tahun terakhir
const randomYear = currentYear - 1; // Mengambil tahun terakhir
const randomMonth = Math.floor(Math.random() * 12) + 1; // Bulan antara 1 dan 12
const randomDay = Math.floor(Math.random() * 28) + 1; // Tanggal antara 1 dan 28 (asumsi bulan Februari)

// Format tanggal dalam bentuk string
const randomDate = `${randomYear}-${randomMonth.toString().padStart(2, '0')}-${randomDay.toString().padStart(2, '0')}`;

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

    

    // Gunakan randomDate untuk mengisi input
    cy.xpath("//input[@id='tgl_lahir']").type(randomDate);



    // cy.xpath("//input[@id='tgl_lahir']").type(year_date()+'-'+month_date()+'-'+day_date())
    const randomGender = Math.random() < 0.5 ? 'Laki-laki' : 'Perempuan';
    cy.xpath("//select[@name='gender']").select(randomGender);
    cy.xpath("//a[contains(.,'Lanjutkan Daftar')]").click()


    // cy.xpath("//select[@name='gender']").select('Laki-laki')

        
        
    })
 
Then('I click Lanjutkan Daftar Button upscale#1.7',()=>{
    // cy.xpath("//a[contains(.,'Lanjutkan Daftar')]").click() 

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

    }
    
    else if (workingExperience === 'belum') {
        const edu_options = ['yes','no'];
        const edu_randomIndex = Math.floor(Math.random() * edu_options.length);
        const edu_selectedOption = edu_options[edu_randomIndex];
        cy.xpath("//select[@name='talent_isa']").select(edu_selectedOption)
    }


  })


