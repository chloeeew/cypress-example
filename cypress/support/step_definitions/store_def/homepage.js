import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"

Given("I am in Automation Test Store homepage",()=>{
    cy.visit("/");
})


