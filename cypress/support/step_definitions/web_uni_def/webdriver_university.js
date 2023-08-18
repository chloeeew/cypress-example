import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import "cypress-real-events/support";
import { web_sel } from "./selector";


Given("I navigate to Webdriver University page",()=>{
    cy.visit("/")
})

When("I click and navigate to {string} section",(sectionName)=>{
    cy.get(web_sel.section_id[sectionName]).scrollIntoView().invoke("removeAttr","target").click()
    cy.title().should("eq",section_title[sectionName])
})

When("I verify the table {int} according to the following data",(tableNum,datatable)=>{
        datatable.hashes().forEach((elem,index) => {
            cy.get(`#t0${tableNum} tbody tr`).eq(index+1).within(()=>{
                cy.get('td').eq(0).invoke("text").should("eq",elem.Firstname)
                cy.get('td').eq(1).invoke("text").should("eq",elem.Lastname)
                cy.get('td').eq(2).invoke("text").should("eq",elem.Age)
            })
        });
})

Then("I click on the {string} tab in the iframe",(tabName)=>{
    cy.get("#frame").then(($frame)=>{
        const frameBody = $frame.contents().find("body")
        cy.wrap(frameBody).as("iframeHome")
    })

    cy.get("@iframeHome").contains(tabName).click()
})

When("I select the {string} from our Products tab in the iframe",(sectionName)=>{
    cy.wait(1000)
    cy.get("#frame").then($frame=>{
        const frameBody = $frame.contents().find("body")
        cy.wrap(frameBody).as("iframeProducts")
    })
    cy.get("@iframeProducts").within(()=>
        cy.get(web_sel.product_section_name[sectionName]).click()
    )
})

Then("I should see the following title and content display in {string} modal",(modalName,dataTable)=>{
    dataTable.hashes().forEach(elem =>{
        cy.get("@iframeProducts").within(()=>{
            cy.get(".modal-title").contains(elem.title).should('be.visible')
            cy.get(".modal-body").contains(elem.content).should("be.visible")
        })
    })
    
})

Then("I select the following option in the corresponding dropdown menu",(dataTable)=>{
    dataTable.raw().forEach((elem,index)=>{
            cy.get(`#dropdowm-menu-${index+1}`).select(elem[0])
            cy.get(`#dropdowm-menu-${index+1}`).contains(elem[0]).should("be.visible")
    })
})

Then("I type {string} in the food item text field",(inputText)=>{
    cy.get("#myInput").type(inputText)
})

When("I choose {string} in the auto complete list",(option)=>{
    cy.get(".autocomplete-items").contains(option).should("be.visible")
    cy.get(".autocomplete-items").contains(option).click()
})

Then("I click on the submit button",()=>{
    cy.get("#submit-button").click({force:true})
})

Then("I should be able to see {string} displays in current url",(expectText)=>{
    cy.url().should("contain",`food-item=${expectText}`)
})


Then("I should be able to see the target display {string}",(value)=>{
    cy.get("#droppable").contains(value).should("be.visible")
})

When("I drag the object to the target",()=>{
    cy.get("#draggable").trigger("mousedown",{which:1})
    cy.get("#droppable").trigger("mousemove").trigger("mouseup",{force:true})
})

When("I double click in the Double Click Me section",()=>{
    cy.get("#double-click").dblclick()
})

Then("I should able to see the Double Click Me section in {string}", (colorName)=>{
    const colorRGB= {
        lightGreen: "rgb(147, 203, 90)",
        yellow: "rgb(254, 196, 45)"
    }
    cy.get("#double-click").should("have.css","background-color",colorRGB[colorName])
})

When("I mousehover in the Hover Me Third Section",()=>{
    cy.get("#div-hover").children().eq(2).realHover('mouse')
})

Then("I should be able to see the following link name in the dropdown list",(dataTable)=>{
    cy.get(".dropdown-content").children().eq(2).within(()=>{
        dataTable.raw().forEach((elem)=>{
            cy.contains(elem[0]).should("be.visible")
        })
    })
})

Then("I click {string} after clicking jsConfirm button and see text {string} display in alert",(actionName, textValue)=>{
    let actionBool = false

    if (actionName.toLowerCase()=="confirm" || actionName.toLowerCase()=="ok"){
        actionBool = true
    }
    cy.get("#button4").click()
    cy.on("window:alert",(str)=>{
        expect(str).to.be.equal(textValue)
    })
    cy.on("window:confirm",()=>{
        return actionBool
    })

})

Then("I should see {string} in the confirm alert text",(alertText)=>{
    cy.get("#confirm-alert-text").contains(alertText).should("be.visible")
})

Then("I should see {string} in alert when select {string} file  click submit to upload",(textValue,fileName)=>{
    if(fileName){
        let filePath = `cypress\\fixtures\\${fileName}`
        cy.get("#myFile").selectFile(filePath)
        cy.wait(1000)
    }else{
        cy.get("#submit-button").click()
    }
    cy.on("window:alert",(str)=>{
        expect(str).to.be.equal(textValue)
    })
})

When("I select {string} in date picker",(dateValue)=>{
    const dateNew = new Date(dateValue)
    const year = dateNew.getFullYear()
    const month = dateNew.getMonth() + 1
    const day = dateNew.getDate()
    
    cy.get(".input-group-addon").click()
    
    
    function selectMonthAndYear(){
        cy.get(".datepicker-switch").first().then((str)=>{
            let a = new Date(str.text())
            let currentYear = a.getFullYear()
            let currentMonth = a.getMonth() + 1 
            if (currentYear < year){
                cy.get(".next").first().click()
                selectMonthAndYear()
            }else if (currentYear > year){
                cy.get(".prev").first().click()
                selectMonthAndYear()
            }else if(currentMonth<month){
                cy.get(".next").first().click()
                selectMonthAndYear()
            }else if (currentMonth > month){
                cy.get(".prev").first().click()
                selectMonthAndYear()
            }
    })
    }

    selectMonthAndYear()
    cy.get(".day").contains(day).click()
    cy.screenshot()
})

Then("I should be able to see the {string} display in date picker",(textValue)=>{
})

const section_title = {
    "dataTable": "WebDriver | Data Tables",
    "iframe" : "WebDriver | IFrame",
    "dropdown": "WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)",
    "autoCompletedTextfield": "WebDriver | Contact Us",
    "action":"WebDriver | Actions",
    "alertPopup":"WebDriver | Popups & Alerts",
    "fileUpload": "File Upload",
    "datePicker": "WebDriver | Datepicker"
}
