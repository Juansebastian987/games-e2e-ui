describe('When the user wants to register a game', () => {
	/**
     * Arrange
     */
	 var name = "Prueba Create Game";
	 var developer = "Prueba Create Game Developer";
	 var year = 2080;
	 var type = "Prueba Create Game Type";
      var console = "Prueba Create Game Console";

     const BASE_URL = "https://proyecto-final-qa-ui.herokuapp.com";
	
	/**
     * Act
     */
	before(()=>{
	  cy.visit(BASE_URL);
	  cy.wait(400);
       cy.get('button.table-button.ant-btn').click({ multiple: true, force: true });
       cy.wait(400)
	  cy.get('#name').type(name);
	  cy.get('#developer').type(developer);
       cy.get('#year').type(year);
       cy.get('#type').type(type);
       cy.get('#console').type(console);
       cy.get('.ant-btn-primary').click();

	})

	
	/**
     * Assert
     */
	it("Then the game should be listed with the right name and author" ,() =>{
	   cy.get('table').contains('td', name).should('be.visible');
        cy.get('table').contains('td', developer).should('be.visible');
        cy.get('table').contains('td', year).should('be.visible');
        cy.get('table').contains('td', type).should('be.visible');
        cy.get('table').contains('td', console).should('be.visible');
	});

});