Feature: Request Join Comunity without login
    As a valid user
    I want to request join comunity without login
    Scenario: Sucess Request Join Comunity Without Login
        Given I visit website upscale#7
        When I Start Apply jobs  upscale#7
        Then I submit all data and validation registration upscale#7
