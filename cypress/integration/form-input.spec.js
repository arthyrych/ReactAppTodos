describe('input test suite', ()=> {

    beforeEach(() => {
        cy.seedAndVisit([])
    })

    it('verify input', () => {
        cy.get('input').should('be.visible').and('have.class', 'new-todo')
    })

    it('type a value into the input', () => {
        const typedText = 'new task'
        cy.get('input').type(typedText).should('have.value', typedText)
    })
})