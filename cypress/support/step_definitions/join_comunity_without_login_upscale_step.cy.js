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


Given('I visit website upscale#6',()=>{
    cy.clearCookies();
    cy.visit('https://upscale.edudev.xyz/')
    
})

When('I Start Request join Comunity upscale#6',()=>{

    cy.on('uncaught:exception', (err, runnable) => {
        if(err.message.includes('Unexpected token')){
           console.log('Application Error Javascript Token')
           return false;
        }
        return true
    })
 

    cy.xpath("//a[.='For Talent']").click()
    cy.xpath("//div[@class='col-lg-4 align-right align-left-md fade-in']/a[contains(.,'Join Community')]").click()
    // cy.xpath("//div[@id='register_main']//input[@name='username']").type(userID_Alpha())

    // function userID_Alpha() {
    //     var text = "";
    //     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    //     for (var i = 0; i < 10; i++)
    //       text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    //     return text;
    //   }

    // cy.xpath("//div[@id='register_main']//input[@id='Email']").type(email_Alpha()+'@gmail.com')

    

    // function email_Alpha() {
    //     var email_text = "";
    //     var email_possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    
    //     for (var i = 0; i < 10; i++)
    //       email_text += email_possible.charAt(Math.floor(Math.random() * email_possible.length));
    
    //     return email_text;
    //   }


    // cy.xpath("//div[@id='register_main']//input[@name='password']").type('shape of you')
    // cy.xpath("//div[@id='register_main']//input[@name='password_confirmation']").type('shape of you')
    // cy.xpath("//select[@id='country_code']").select('Indonesia (+62)')
    // cy.xpath("//div[@id='register_main']//input[@id='Number']").type('081477898675')
    // cy.xpath("//input[@id='refrensi']").type('Facebook')
    // cy.xpath("//a[contains(.,'DAFTAR')]").click()
    
})

When('I Fill Registration Form upscale#6',()=>{

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

When('I continue Fill Regist as Talent Form upscale#6',()=>{

  cy.xpath("//div[@class='question_box first show_box']//input[@name='name']").type(random_text())
  cy.xpath("//input[@name='talent_address']").type('Las Vegas')  
  cy.xpath("//input[@name='tempat_lahir']").type("Texas")
  cy.xpath("//input[@id='tgl_lahir']").type(randomDate);
  const randomGender = Math.random() < 0.5 ? 'Laki-laki' : 'Perempuan';
  cy.xpath("//select[@name='gender']").select(randomGender);
  cy.xpath("//a[contains(.,'Lanjutkan Daftar')]").click()

})

When('I Fill The Working Experience Field upscale#6',()=>{

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

const skilldev = Math.random() < 0.5 ? 'ya' : 'tidak';
const yes_no_option = Math.random() < 0.5 ? 'yes' : 'no';
const ya_belum_option= Math.random() < 0.5 ? 'ya' : 'belum';


When('I Fill Web Development Experience Field upscale#6',()=>{


  cy.xpath("//select[@id='web_option']").select(skilldev)
  if (skilldev == 'ya' ) {
      
      cy.xpath("//div[@class='fstElement fstMultipleMode fstNoneSelected fstActive fstResultsOpened']//input[@class='fstQueryInput fstQueryInputExpanded']").click()


      cy.xpath("//span[.='Ruby']").click()
      cy.xpath("//span[.='PHP']").click()
      cy.xpath("//span[.='Codeigniter - CI']").click()
      cy.contains('Apakah anda memiliki kemampuan Web Development?').click()
      // cy.pause()

      
      cy.xpath("//a[contains(.,'Selanjutnya')]").click()

  }

  else{
      cy.xpath("//a[contains(.,'Selanjutnya')]").click()
  }

})

When('I Fill Mobile Development Experience Field upscale#6',()=>{
  cy.xpath("//select[@id='mobile_option']").select(skilldev)
  if (skilldev == 'ya' ) {
      
      // cy.xpath("//div[@class='fstElement fstMultipleMode fstNoneSelected fstResultsOpened fstActive']//input[@class='fstQueryInput fstQueryInputExpanded']").click()
      cy.xpath("//span[.='Swift']").click()
      cy.xpath("//span[.='Android Native']").click()
      cy.xpath("//span[.='Unity']").click()
      cy.contains('Apakah anda memiliki Skill Mobile Development?').click()
      cy.xpath("//a[contains(.,'Selanjutnya')]").click()

  }

  else{
      cy.xpath("//a[contains(.,'Selanjutnya')]").click()
  }

})

When('I Fill Dekstop Development Experience Field upscale#6',()=>{
  cy.xpath("//select[@id='desktop_option']").select(skilldev)
  cy.xpath("//a[contains(.,'Selanjutnya')]").click()  
})

When('I Fill Managerial Experience Field upscale#6',()=>{
  cy.xpath("//select[@id='management_option']").select(skilldev)
  cy.xpath("//a[contains(.,'Selanjutnya')]").click()
})

When('I Fill Other Experience Field upscale#6',()=>{
  cy.xpath("//select[@id='other_option']").select(skilldev)
  cy.xpath("//a[contains(.,'Selanjutnya')]").click()  
})

When('I Fill Oportunity Job Vacancy Field upscale#6',()=>{
  cy.xpath("//input[@name='fulltime_rate']").type('5000000')

  const career_status = ['yes', 'no', '1_month'];
  const careerIndex = Math.floor(Math.random() * career_status.length);
  const selectedcarrer = career_status[careerIndex];
  cy.xpath("//select[@id='av']").select(selectedcarrer)
  cy.xpath("//button[@class='ui-datepicker-trigger']").click()
  cy.xpath("//a[.='14']").click()
  cy.xpath("//select[@id='luar_kota_option']").select(yes_no_option)
  cy.xpath("//select[@name='talent_remote']").select(yes_no_option)
  cy.xpath("//a[contains(.,'Selanjutnya')]").click()
})

When('I Fill Frelance Project Field upscale#6',()=>{
  cy.xpath("//select[@id='freelance_option']").select(skilldev)
  cy.xpath("//select[@id='project_option']").select(skilldev)
  cy.xpath("//a[contains(.,'Selanjutnya')]").click()
})

When('I Fill Mentor Oportunity Field upscale#6',()=>{
  
      const index = Math.floor(Math.random() * 3);
      cy.xpath("//select[@id='ngajar_option']").select(index);

      if (index === 0) {
  
          cy.xpath("//input[@name='ngajar_rate']").type('25000', { force: true });

      }
      cy.xpath("//a[contains(.,'Selanjutnya')]").click();


  })

const international_career = [
  'ya',
  'Tidak yakin, bahasa inggris saya tidak cukup baik',
  'Tidak, karena perbedaan budaya kerja',
  'Tidak, karna suatu hal'
];
const international_career_Index = Math.floor(Math.random() * international_career.length);
const selectedinternationalcarrer = international_career[international_career_Index];

When('I Fill Remote International Career Oportunity Field upscale#6',()=>{

  cy.xpath("//select[@name='talent_international']").select(selectedinternationalcarrer)
  cy.xpath("//a[contains(.,'Selanjutnya')]").click()

})

When('I Fill Onsite International Career Oportunity Field upscale#6',()=>{

  cy.xpath("//select[@name='overseas_onsite']").select(selectedinternationalcarrer)
  cy.xpath("//a[contains(.,'Selanjutnya')]").click()

})

When('I Fill Select Job Vacancy Field upscale#6',()=>{

  cy.xpath('//select[@id="job_vacancy_opt"]').then((selectElement) => {
      const options = [];

      selectElement.find('option').each((index, option) => {
          options.push(option.value);
      })
      const randomIndex = Math.floor(Math.random() * options.length);
      const selectedOption = options[randomIndex];

      cy.xpath('//select[@id="job_vacancy_opt"]').select(selectedOption)
      
  })

  cy.xpath("//a[contains(.,'Selanjutnya')]").click()

})

When('I checked All form upscale#6',()=>{

  

  cy.xpath("//a[contains(.,'Kirim Form Pendaftaran?')]").click()

})

Then('I Validation, I Sucess Registration upscale#6',()=>{

  

  cy.contains('Berhasil Mendaftar!').should('be.visible')

})
