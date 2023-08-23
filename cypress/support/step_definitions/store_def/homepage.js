import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import { mockAPIResponseWithAlias } from "./common";

let skisheenPriceMockData = require("../../../fixtures/mockData/skinsheenPriceMockData.json")

Given("I am in Automation Test Store homepage",()=>{
    cy.visit("/");
})

When("I click on {string} in MAKEUP toolbar dropdown list",(elementName)=>{
    cy.get("nav > ul > li").eq(2).realHover();
    cy.get("nav > ul > li").eq(2).within(()=>{
        cy.contains(elementName).click();
    })
})

When("I mock the price of {string} to {string}",(productName,price)=>{
    let productMockData
    if(productName.toLowerCase()=="skisheen"){
        productMockData = skisheenPriceMockData
        productMockData.price = price
    }
    mockAPIResponseWithAlias('POST','**/product/calculateTotal',skisheenPriceMockData,"mockCalculateTotal");
})

Then("I click on {string} in the product table",(productName)=>{
    cy.contains(productName).parent().parent().parent().click();
})

Then("I should see {string} in the product total price of {string} details page",(price,productName)=>{
    cy.get(".productname > span").contains(productName).parent().parent().within(()=>{
        cy.get(".total-price").should("contain.text",price)
    })                                    
})

