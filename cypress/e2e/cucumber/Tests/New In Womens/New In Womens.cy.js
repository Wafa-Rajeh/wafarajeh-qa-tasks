import { Given, When, Then } from "/cypress-cucumber-preprocessor";

Given("the user is on the What's New page", () => {
    cy.visit("https://magento.softwaretestingboard.com/what-is-new.html");
    cy.wait(2000);
});

When("the user get all categories from the New In Womens section", () => {
    cy.fixture("selectors").invoke("newInWomensCategories").then((categorySelector) => {
        cy.get(categorySelector).invoke('toArray').then((categories) => {
            let categoryNames = [];  
            for (let i = 0; i < categories.length; i++) {
                cy.wrap(categories[i]).invoke('text').then((categoryName) => {
                    categoryNames[i] = categoryName;  invoke('text')
                });
            }

            cy.wrap(categoryNames).then((names) => {
                for (let i = 0; i < names.length; i++) {
                    cy.log(names[i]); 
                     cy.log()
                }
            });
        });
    });
});

Then("the system should print all category names in the console", () => {});
