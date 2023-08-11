Feature: Registration in Upscale 
    As a valid user
    I want to Registration new account
    Scenario: Sucess registration new account
        Given I open website upscale#1.1
        When I click login menu upscale#1.1
        When I click hyperlink registration upscale#1.1
        When I Fill Registration Form upscale#1.1
        Then validation Sucess Regist upscale#1.1
