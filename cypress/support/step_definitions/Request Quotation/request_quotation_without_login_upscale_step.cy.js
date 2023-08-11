import 'cypress-iframe';
import 'cypress-xpath'

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I visit website upscale#3',()=>{
    cy.clearCookies();
    cy.visit('https://upscale.edudev.xyz/')
    
})

When('I Start Request Quotation  upscale#3',()=>{
    cy.contains('Request Quotation').click()
    cy.contains('Next').click()
    cy.xpath("//div[@class='question_box show_box']/div[2]").click()
    cy.xpath("//div[@class='question_box show_box']//a[contains(.,'Next')]").click()
    cy.xpath("//input[@value='new idea']").click()
    cy.xpath("//input[@value='kurang dari 1 bulan']").click()
    cy.xpath("//input[@value='1 talent']").click()
    cy.xpath("//input[@value='perjam']").click()
    cy.xpath("//input[@class='fstQueryInput fstQueryInputExpanded']").click()
    cy.xpath("//span[.='Ruby']").click()
    cy.xpath("//span[.='PHP']").click()
    cy.xpath("//span[.='Codeigniter - CI']").click()
    cy.contains('Skill apakah yang anda inginkan untuk talent yang kami berikan').click()
    cy.xpath("//div[@class='question_box show_box']//a[contains(.,'Next')]").click()
    cy.xpath("//input[@value='More than 1000']").click()
    cy.xpath("//input[@value='More than 2 weeks from now']").click()
    cy.xpath("//div[@class='question_box show_box']/label[1]//div[@class='checkbox']").click()
    cy.xpath("//input[@name='company_name']").type('PT Big Family')
    cy.xpath("//input[@name='company_email']").type('keluargafamily@gmail.com')
    cy.xpath("//input[@name='company_number']").type('087773304566')
    cy.xpath("//div[@class='question_box company_contact show_box']//a[contains(.,'Next')]").click()
    
})

Then('I submit all data and validation registration upscale#3',()=>{
    cy.xpath("//a[contains(.,'Submit')]").click()
    cy.contains('Request Inquiry berhasil, kami akan segera menghubungi anda sesuai waktu yang telah anda tentukan, terimakasih').should('be.visible')
})