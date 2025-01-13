describe('', () => {
    before(()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
            cy.get("[title='Radiant Tee']").contains("Radiant Tee").click()
            
       });
    
    it('validate that the user can submit a review on theproduct page' , () => {
        
        
    });
    
});
