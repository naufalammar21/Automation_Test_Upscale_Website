Feature: Request Join Comunity without login
    As a valid user
    I want to request join As a Talent without login
    Scenario: Sucess Request Join As a telent Without Login
        Given I visit website upscale#8
        When I Start Request join as talent  upscale#8
        Then I submit all data and validation registration upscale#8
