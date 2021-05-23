describe('When the user wants to register a book', () => {
	/**
     * Arrange
     */
	 var name = "Prueba Read Game";
	 var developer = "Prueba Read Game Developer";
	 var year = 2080;
	 var type = "Prueba Read Game Type";
     var console = "Prueba Read Game Console";

     const BASE_URL = "https://proyecto-final-qa-ui.herokuapp.com";

	/**
     * Act
     */
	before(()=>{
        cy.visit(BASE_URL);
        cy.wait(400);
        cy.get('button.table-button.ant-btn').click({
            multiple: true,
            force: true
        });
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
	it("Then the book should be listed with the right name and author" ,() =>{
		cy.get('table').contains("unique_value").should('have.length', 0);

	});
});