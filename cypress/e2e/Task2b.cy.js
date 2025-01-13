describe('task2b', () => {
    before(()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
            cy.get("[title='Radiant Tee']").contains("Radiant Tee").click()
            
       });
    
    it('validate that the user can submit a review on theproduct page' , () => {
        cy.get("#tab-label-reviews-title").click()
        cy.contains("[type='radio']").click()
        cy.get("#nickname_field").type("lana")
        cy.get("#summary_field").type("not good")
        cy.get("#review_field").type("bad color")
       cy.contains("span","Submit Review").click()
      cy.contains("You submitted your review for moderation.").should("be.visibel")
       

})});