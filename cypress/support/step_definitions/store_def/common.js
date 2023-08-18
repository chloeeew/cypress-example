import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"

When("I select {string} in the navigation bar",(barName)=>{
    cy.get('[role="navigation"]').within(()=>{
        cy.contains(barName).should("be.visible")
        cy.contains(barName).click()
    })
})

Then("I should be able to see {string} in the navigation bar",(elementName)=>{
    cy.get('[role="navigation"]').within(()=>{
        cy.contains(elementName).should("be.visible")
    })
})

When("I click on {string} Button",(buttonName)=>{
    cy.get("button").filter('[title="'+buttonName+'"]').click();
})
    