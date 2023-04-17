describe('YouTube search', () => {
    it('should find videos', () => {
      cy.visit(Cypress.env('CYPRESS_baseUrl'))
      cy.get('#search').type(Cypress.env('CYPRESS_searchTerm')).type('{enter}')
      cy.get('#video-title').should('be.visible')
    })
  })