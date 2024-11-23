describe('conduit', () => {

    it('verify conduit is visibel', () => {
        cy.visit("https://demo.productionready.io/#/register")
        cy.get(".navbar-brand")
        
    });
 
 it('validate home', () => {
    cy.visit("https://demo.productionready.io/#/register")
      cy.get("[ui-sref='app.home']").contains("Home")
        


        
   });
    it('validate sing up', () => {
        cy.visit("https://demo.productionready.io/#/register")
        cy.get("[ui-sref='app.register']").contains(" Sign up")
        
   });

   it("verify sing up is visibel", () => {
    cy.visit("https://demo.productionready.io/#/register")
   cy.get("[ng-bind='$ctrl.title']").contains("Sign up")


  });
it('have an account?', () => {
    cy.visit("https://demo.productionready.io/#/register")
cy.contains("Have an account?").click()

    
});
it('validate user name', () => {
    cy.visit("https://demo.productionready.io/#/register")
   cy.get("[ng-model='$ctrl.formData.username']")
});
   it('validate enter email', () => {
   cy.visit("https://demo.productionready.io/#/register")
   cy.get("[placeholder='Email']")
       
   });
   it('validate password', () => {
    cy.visit("https://demo.productionready.io/#/register")
cy.get("[placeholder='Password']")
   });
   it('validate button sing up', () => {
    cy.visit("https://demo.productionready.io/#/register")
    cy.get("[ng-bind='$ctrl.title']").last()

   });
   it('verify conduit at the footer', () => {
    cy.visit("https://demo.productionready.io/#/register")
    cy.get ("[ng-bind='::$ctrl.appName | lowercase']").last()
   });
   it('verify text', () => {
    cy.visit("https://demo.productionready.io/#/register")
cy.get( "[ui-sref='app.home']").get(".container").last()


  
   });
});
