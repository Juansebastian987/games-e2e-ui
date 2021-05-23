describe('When the user wants to register a book', () => {
    /**
     * Arrange
     */
     var name = "Prueba Update Game";
	 var developer = " ";
	 var year = 0;
	 var type = " ";
     var console = " ";

     const BASE_URL = "https://proyecto-final-qa-ui.herokuapp.com";

	/**
     * Act
     */
	before(()=>{
	cy.visit(BASE_URL)

    cy.wait(400);
    cy.get(':nth-child(5) > :nth-child(7) > .ant-btn').click();
    cy.wait(400);
	cy.get('#name').clear();
	cy.get('#developer').clear();
	cy.get('#year').clear();
	cy.get('#type').clear();
	cy.get('#console').clear();
	cy.wait(400);
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
	it("Then the book should be listed with the right name and author" ,() =>{
		cy.get('table').contains('td', name).should('be.visible');
	
	});

});