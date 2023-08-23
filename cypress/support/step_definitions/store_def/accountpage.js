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

Given("I Login into Automation Test Store homepage as {string}",(user)=>{
    cy.visit("/")
    cy.get('[role="navigation"]').within(()=>{
        cy.contains("Login or register").should("be.visible")
        cy.contains("Login or register").click()
    })
    cy.get("[class~='returncustomer']").within(()=>{
        cy.contains("Login Name").next().children().type(user)
        cy.contains("Password").next().children().type(Cypress.env(user),{log:false});
    })
})
