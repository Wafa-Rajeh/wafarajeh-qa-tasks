describe('magnto', () => {
    before(()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        
       });
    
    it('Add to Compare', () => {
        cy.get ("#search").type("Radiant Tee","{enter}")
        cy.get("[title='Radiant Tee']").contains("Radiant Tee").click()
       cy.get(".action").contains("Add to Compare").click()
       

    
});
    
});
