Feature: Request Join Comunity without login
    As a valid user
    I want to request join As a Talent without login
    Scenario: Sucess Request Join As a telent Without Login
        Given I visit website upscale#8
        When I Start Request join as talent  upscale#8
        When I Fill Registration Form upscale#8
        When I continue Fill Regist as Talent Form upscale#8
        When I Fill The Working Experience Field upscale#8
        When I Fill Web Development Experience Field upscale#8
        When I Fill Mobile Development Experience Field upscale#8
        When I Fill Dekstop Development Experience Field upscale#8
        When I Fill Managerial Experience Field upscale#8
        When I Fill Other Experience Field upscale#8
        When I Fill Oportunity Job Vacancy Field upscale#8
        When I Fill Frelance Project Field upscale#8
        When I Fill Mentor Oportunity Field upscale#8
        When I Fill Remote International Career Oportunity Field upscale#8
        When I Fill Onsite International Career Oportunity Field upscale#8
        When I Fill Select Job Vacancy Field upscale#8
        When I checked All form upscale#8
        Then I Validation, I Sucess Registration upscale#8

