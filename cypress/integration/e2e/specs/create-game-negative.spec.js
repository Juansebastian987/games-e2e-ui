describe('When the user wants to register a game', () => {

    /**
     * Arrange
     */

    const BASE_URL = "https://proyecto-final-qa-ui.herokuapp.com";
    var name = "Prueba Create Game";
    var developer = " ";
    var year = 0;
    var type = " ";
    var console = " ";

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
	it("Then the game should be listed with the right name" ,() =>{
		cy.get('table').contains('td', name).should('be.visible');
	});

});