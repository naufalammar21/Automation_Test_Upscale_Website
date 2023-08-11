Feature: Registration using email has registered in Upscale 
    As a valid user
    I want to validation registration New Account using email has registered
    Scenario: Faileed registration new account because email has registered
        Given I open website upscale#1.5
        When I click login menu upscale#1.5
        When I click hyperlink registration upscale#1.5
        When I Fill Registration Form And I using email registered upscale#1.5
        Then validation username has registered upscale#1.5
