describe('input test suite', ()=> {

    beforeEach(()=> {
        cy.visit('/')
    })

    it('verify input', ()=> {
        cy.get('input').should('be.visible').and('have.class', 'new-todo')
    })

    it('type into the input a new task', ()=> {
        cy.get('input').type('new task')
    })
})