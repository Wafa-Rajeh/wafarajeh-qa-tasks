describe('practice3', () => {
    before(()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
            cy.contains("Sign In").click()
            cy.get("#email").type("rajeh.wafa19@yahoo.com")
            cy.get("#pass").type("Omar@2019")
            cy.get("#send2").click()
       });
    
    it('add to wishlist', () => {
        cy.get ("#search").type("Radiant Tee","{enter}")
        cy.get("[title='Radiant Tee']").contains("Radiant Tee").click()
         cy.contains("Add to Wish List").click()
         cy.wait(10000)
       cy.get(".message").should("be.visibel")
       cy.screenshot({capture:"fullPage"})
    });


    
});