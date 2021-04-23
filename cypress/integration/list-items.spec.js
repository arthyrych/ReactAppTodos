describe('list items test suite', ()=> {

    it('delete list item', ()=> {
        cy.server()
        cy.route('DELETE', '/api/todos/*', {}).as('delete')
        cy.seedAndVisit()
        cy.get('.todo-list li').as('list')
        
        cy.get('@list').first().find('.destroy').invoke('show').click()
        cy.wait('@delete')
        cy.get('@list').should('have.length', 3)
    })

    it('mark list item complete', ()=> {
        cy.seedAndVisit()

        cy.fixture('todos').then( todos => {
            const target = todos[0]
            cy.route('PUT', `/api/todos/${target.id}`, Cypress._.merge(target, { isComplete: true })).as('update')
        })

        cy.get('.todo-list li').first().as('firstTodo')
        cy.get('@firstTodo').find('.toggle').as('checkbox')
        cy.get('@checkbox').click()
        cy.wait('@update')
        cy.get('@checkbox').should('be.checked')
        cy.get('@firstTodo').should('have.class', 'completed')
        cy.get('.todo-count').should('contain', 3)

    })

})