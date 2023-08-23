@Store

Feature: Store chart
  Scenario: Mock product prices
    Given I Login into Automation Test Store homepage as "CypressTestingUser"
    When I click on "Cheeks" in MAKEUP toolbar dropdown list
    When I mock the price of "SKINSHEEN BRONZER STICK" to "£99.99"
    Then I click on "Skinsheen Bronzer Stick" in the product table
    Then I should see "£99.99" in the product total price of "Skinsheen Bronzer Stick" details page





