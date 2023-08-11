Feature: Registration using Different Password in Upscale 
    As a valid user
    I want to registration with different password
    Scenario: Faileed registration new account because different password
        Given I open website upscale#1.6
        When I click login menu upscale#1.6
        When I click hyperlink registration upscale#1.6
        When I Fill Registration Form And I Fill Different Password upscale#1.6
        Then validation Password field and confirm password field has different contains upscale#1.6
