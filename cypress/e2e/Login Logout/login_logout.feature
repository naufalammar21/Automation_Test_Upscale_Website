Feature: Logout in website upscale 
    As a valid user
    I want to checked login and logout in upscale website
    Scenario: Validation Login and Logout
        Given I open login page upscale#1.4
        When I click login menu upscale#1.4
        When I fill the login form upscale#1.4
        When I click login button#1.4
        Then I click logout button#1.4
