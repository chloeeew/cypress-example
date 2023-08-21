# Cypress with Cucumber Framework 
## Installation
`npm install`
## Run with tags
- env 01: webdriver university 
`npx cypress run --env "tags=@university,configFile=university"`
- enve 02: others
`npx cypress run -env "tags=@store"`
## Generate html report 
`node util\htmlreportGenerate.js`
- customize script
`npm run generateHtmlReport`