describe('Navigation from header', () => {
    it('should navigate to the prices page', () => {
        // Go to prices page
        cy.visit('http://localhost:3000/');
        cy.get('a[href*="/prices"]').click();
        cy.url().should('include', '/prices');
        cy.get('h1').contains('Prices');

        // Go to price item
        let id = 0;
        cy.get('div[data-cy="list"]')
            .find('a')
            .last()
            .then((el) => {
                id = el.data('id') as number;
                expect(id).not.eq(0);
            })
            .click()
            .then(() => {
                cy.url().should('include', `/prices/${id}`);
            });
    });
});

export {};
