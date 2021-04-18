describe('app init test suite', () => {
    it('app init test', () => {
        cy.seedAndVisit()
        cy.get('.todo-list li').should('have.length', 4)
    })
})