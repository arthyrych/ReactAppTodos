describe('form submission test suite', ()=> {

    it('add a new todo item', ()=> {
        const newTodo = 'new todo from const'
        cy.server()
        cy.route('POST', '/api/todos', 'fixture:newTodo').as('save')
        cy.seedAndVisit()
        cy.get('.new-todo').type(newTodo).type('{enter}')
        cy.wait('@save')
        cy.contains('new todo from fixtures').should('be.visible')
    })

    it('shows an error message for a failed form submission', ()=> {
        const newTodo = 'new todo from const'
        cy.server()
        cy.route({
            method: 'POST',
            url: '/api/todos',
            status: 500,
            response: {}
        }).as('save')
        cy.seedAndVisit()
        cy.get('.new-todo').type(newTodo).type('{enter}')
        cy.wait('@save')
        cy.get('.todo-list li').should('have.length', 4)
        cy.get('.error').should('be.visible')
    })

})