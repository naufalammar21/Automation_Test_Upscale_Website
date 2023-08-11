Feature: Failed Login in website upscale 
    As a valid user
    I want to request quotation with login
    Scenario: Sucess Request Quotation with login 
        Given I visit website upscale#4
        When I Login to Web upscale#4
        When I Start Request Quotation  upscale#4
        Then I submit all data and validation registration upscale#4
