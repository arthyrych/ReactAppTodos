describe('footer test suite', ()=> {

    it('filters test', ()=> {

        const filters = [
            {link: 'Active', expectedLength: 2},
            {link: 'Completed', expectedLength: 2},
            {link: 'All', expectedLength: 4},
        ]

        cy.seedAndVisit('fixture:mixedTodos')

        cy.wrap(filters).each( filter => {
            cy.contains(filter.link).click()
            cy.get('.todo-list li').should('have.length', filter.expectedLength)
        })

    })

})