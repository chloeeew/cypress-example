import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"

When("I select {string} in the navigation bar",(barName)=>{
    cy.get('[role="navigation"]').within(()=>{
        cy.contains(barName).should("be.visible")
        cy.contains(barName).click()
    })
    cy.screenshot()
})

Then("I should be able to see {string} in the navigation bar",(elementName)=>{
    cy.get('[role="navigation"]').within(()=>{
        cy.contains(elementName).should("be.visible")
    })
    cy.screenshot()
})

When("I click on {string} Button",(buttonName)=>{
    cy.get("button").filter('[title="'+buttonName+'"]').click();
    cy.screenshot()
})


export function mockAPIResponseWithAlias(method,url,response,alias){
    cy.intercept(method,url,response).as(alias)
}