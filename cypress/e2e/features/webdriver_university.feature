@university
Feature: Webdrvier University


    Scenario: 01 Verify data table
        Given I navigate to Webdriver University page
        When I click and navigate to "dataTable" section
        When I verify the table 1 according to the following data
            | Firstname | Lastname | Age |
            | John      | Smith    | 45  |
            | Jemma     | Jackson  | 94  |
            | Michael   | Doe      | 20  |
        When I verify the table 2 according to the following data
            | Firstname | Lastname | Age |
            | Jason     | Jones    | 27  |
            | Sarah     | Jackson  | 56  |
            | Bob       | Woods    | 80  |



    Scenario: 02 handling Ifame and verify modal
        Given I navigate to Webdriver University page
        When I click and navigate to "iframe" section
        Then I click on the "Our Products" tab in the iframe
        When I select the "Special Offers" from our Products tab in the iframe
        Then I should see the following title and content display in "specialOffers" modal
            | title                                                                    | content                                                                           |
            | SPECIAL OFFER! - GET 30% OFF YOUR FIRST ORDER AT WEBDRIVERUNIVERSITY.COM | To receive 30% off please add the following code to the basket: NEWCUSTOMER773322 |


    @skip
    Scenario: 03 Verify Dropdown list
        Given I navigate to Webdriver University page
        When I click and navigate to "dropdown" section
        Then I select the following option in the corresponding dropdown menu
            | Python |
            | TestNG |
            | JQuery |
        Then I select the following option in the corresponding dropdown menu
            | C#    |
            | Maven |
            | HTML  |


    @skip
    Scenario Outline: 04 Verify autocompleted textfield <foodItem>
        Given I navigate to Webdriver University page
        When I click and navigate to "autoCompletedTextfield" section
        Then I type "<fuzzyWord>" in the food item text field
        When I choose "<foodItem>" in the auto complete list
        When I click on the submit button
        Then I should be able to see "<urlArgs>" displays in current url

        Examples:
            | fuzzyWord | foodItem     | urlArgs      |
            | B         | Bacon        | Bacon        |
            | Cat       | Catfish      | Catfish      |
            | French    | French toast | French+toast |


    @skip
    Scenario: 05 handling double click & hover & drag and drop
        Given I navigate to Webdriver University page
        When I click and navigate to "action" section
        Then I should be able to see the target display "DROP HERE!"
        When I drag the object to the target
        Then I should be able to see the target display "Dropped"
        # double click
        When I double click in the Double Click Me section
        Then I should able to see the Double Click Me section in "lightGreen"
        When I double click in the Double Click Me section
        Then I should able to see the Double Click Me section in "yellow"
        # hover
        When I mousehover in the Hover Me Third Section
        Then I should be able to see the following link name in the dropdown list
            | Link 1 |
            | Link 1 |


    @skip
    Scenario Outline: 06 handling alert <ClickAction>
        Given I navigate to Webdriver University page
        When I click and navigate to "alertPopup" section
        Then I click "<ClickAction>" after clicking jsConfirm button and see text "Press a button!" display in alert
        Then I should see "<AlertText>" in the confirm alert text

        Examples:
            | ClickAction | AlertText           |
            | confirm     | You pressed OK!     |
            | cancel      | You pressed Cancel! |



    Scenario: 07 handling file upload
        Given I navigate to Webdriver University page
        When I click and navigate to "fileUpload" section
        Then I should see "You need to select a file to upload!" in alert when select "" file  click submit to upload
        Then I should see "Your file has now been uploaded!" in alert when select "testUpload.png" file  click submit to upload


    @skip
    Scenario Outline: 08 handling data picker <Date>
        Given I navigate to Webdriver University page
        When I click and navigate to "datePicker" section
        Then I select "<Date>" in date picker

        Examples:
            | Date       |
            | 2021-03-21 |
            | 2023-08-01 |
            | 2024-05-31 |





