Feature: Checked F.A.Q Menu 
    As a valid user
    I want to checked F.A.Q menu in upscale website
    Scenario: Sucess login
        Given I open website upscale#9
        When I click F.A.Q menu upscale#9
        When I open the question upscale#9
        Then I validation text in question upscale#9
