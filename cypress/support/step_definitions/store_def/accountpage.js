import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"

Then("I should be able to see {string} in account login page", (elementName)=>{
    cy.get('.returncustomer').within(()=>{
        cy.contains(elementName).should("be.visible")
    })
})

When("I type {string} in the {string} input box of login section",(inputValue, inputField)=>{
    cy.get("[class~='returncustomer']").within(()=>{
        cy.contains(inputField).next().children().type(inputValue)
    })
})

