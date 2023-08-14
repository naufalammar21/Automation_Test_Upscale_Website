Feature: Regist Account and Regist As Talent in Upscale 
    As a valid user
    I want to Registration new account and Regist as Talent
    Scenario: Sucess registration new account and Regist as Talent
        Given I open website upscale#1.7
        When I click login menu upscale#1.7
        When I click hyperlink registration upscale#1.7
        When I Fill Registration Form upscale#1.7
        When I continue Fill Regist as Talent Form upscale#1.7
        When I Fill The Working Experience Field upscale#1.7
        Then I Fill Web Development Experience Field upscale#1.7
