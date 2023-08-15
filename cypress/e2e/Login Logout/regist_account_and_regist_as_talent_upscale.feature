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
        When I Fill Web Development Experience Field upscale#1.7
        When I Fill Mobile Development Experience Field upscale#1.7
        When I Fill Dekstop Development Experience Field upscale#1.7
        When I Fill Managerial Experience Field upscale#1.7
        When I Fill Other Experience Field upscale#1.7
        When I Fill Oportunity Job Vacancy Field upscale#1.7
        When I Fill Frelance Project Field upscale#1.7
        When I Fill Mentor Oportunity Field upscale#1.7
        When I Fill Remote International Career Oportunity Field upscale#1.7
        When I Fill Onsite International Career Oportunity Field upscale#1.7
        When I Fill Select Job Vacancy Field upscale#1.7
        When I checked All form upscale#1.7
        Then I Validation, I Sucess Registration upscale#1.7