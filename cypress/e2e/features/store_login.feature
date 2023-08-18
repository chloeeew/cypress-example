@Store
Feature: Store Login
    
    Scenario: 01 Login success from Login or register link
        Given I am in Automation Test Store homepage
        When I select 'Login or register' in the navigation bar
        Then I should be able to see "Returning Customer" in account login page
        When I type 'CypressTestingUser' in the 'Login Name' input box of login section
        When  I type 'cypress12345' in the 'Password' input box of login section
        When I click on 'Login' Button
        Then I should be able to see 'Welcome back POST' in the navigation bar


