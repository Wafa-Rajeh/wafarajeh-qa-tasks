describe('task2', () => {
   
    before(()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
            cy.get("[title='Radiant Tee']").contains("Radiant Tee").click()
            
       });
    
    it('validate that the user can update products from the shopping cart', 
        () => {
            cy.get("#option-label-size-143-item-166").click()
            cy.get("#option-label-color-93-item-57").click()
            cy.get("#qty").type(3)
        cy.contains("span","Add to Cart").click()
        cy.get(".counter-number").should("be.visible").and("contain","1")

    });
   
});