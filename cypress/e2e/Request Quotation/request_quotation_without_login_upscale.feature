Feature: Failed Login in website upscale 
    As a valid user
    I want to request quotation without login
    Scenario: Sucess Request Quotation
        Given I visit website upscale#3
        When I Start Request Quotation  upscale#3
        Then I submit all data and validation registration upscale#3
