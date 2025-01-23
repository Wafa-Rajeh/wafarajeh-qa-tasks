
describe('Test Case - Print All Categories in New In Womens Section', () => {
  before(()=>{
    cy.visit("https://magento.softwaretestingboard.com/")
   });

  it('Prints all categories in the New In Womens section', () => {
      cy.get("#ui-id-3").click()
     cy.get("#page-title-heading").should("be.visible")
      cy.get(".title").contains("span","New in women's")
      cy.get(".title").each(($el) => {
        cy.log($el.text())

          });
})})