describe('Navigation from header', () => {
    it('should navigate to the prices', () => {
        cy.visit('http://localhost:3000/');
        cy.get('a[href*="/prices"]').click();
        cy.url().should('include', '/prices');
        cy.get('h1').contains('Prices');
    });

    it('should navigate to the events', () => {
        cy.visit('http://localhost:3000/');
        cy.get('a[href*="/events"]').click();
        cy.url().should('include', '/events');
        cy.get('div').contains('Events');
    });

    it('should navigate to the about', () => {
        cy.visit('http://localhost:3000/');
        cy.get('a[href*="/about"]').click();
        cy.url().should('include', '/about');
        cy.get('div').contains('About');
    });
});

export {}
