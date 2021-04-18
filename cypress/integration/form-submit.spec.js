describe('form submission test suite', () => {
    it('add a new todo item', () => {
        const newTodo = 'new todo example'
        cy.server()
        cy.route('POST', '/api/todos', 'fixture:newTodo').as('save')
        cy.seedAndVisit()
        cy.get('.new-todo').type(newTodo).type('{enter}')
        cy.wait('@save')
        cy.contains('new todo from fixtures').should('be.visible')
    })
})