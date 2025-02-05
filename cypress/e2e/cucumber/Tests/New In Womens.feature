Feature: Print Categories in "New In Womens" Section

  Scenario: Print all categories in the New In Womens section
    Given the user is on the "What's New" page
    When the user get all categories from "New In Womens" section
    Then the system should print all category names in the console