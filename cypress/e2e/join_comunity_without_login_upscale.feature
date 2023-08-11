Feature: Request Join Comunity without login
    As a valid user
    I want to request join comunity without login
    Scenario: Sucess Request Join Comunity Without Login
        Given I visit website upscale#6
        When I Start Request join Comunity  upscale#6
        When I fill Register AS Talent Form upscale#6
        When I fill The Work Experience Form upscale#6
        When I fill The Skill Web Development Form upscale#6
        Then I fill The Skill of Mobile Developer Form upscale#6
