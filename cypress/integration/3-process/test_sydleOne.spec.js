///<reference types="cypress" />
describe('Process Test', () => {
    it('Test 1', () => {
        cy.visit("https://levty-university.sydle.one/#/app/main/obj/62f53685dd252214015b9256/62f538b5f16a266de9082f69")
        cy.get('#login').type('arielson.souza')
        cy.get('#password').type('Mudar123')
        cy.get('[title="Entrar"]').click()
        getIframeBody().find('[title="Executar"]',{ timeout: 10000 }).click()
        getIframeBody().find('#name',{ timeout: 10000 }).should('be.visible').clear().type("Fausto Silva")
        getIframeBody().find('#street',{ timeout: 10000 }).should('be.visible').clear().type("Roberto Marinho")
        getIframeBody().find('#numero',{ timeout: 10000 }).should('be.visible').clear().type("35")
        getIframeBody().find('#complement',{ timeout: 10000 }).should('be.visible').clear().type("Oh Loco Bicho !!!")
        getIframeBody().find('[aria-label="Sim"]',{ timeout: 10000 }).click()

    })
  })
  
  const getIframeBody = () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
    .get('iframe',{ timeout: 10000 }).should('be.visible')
    .its('0.contentDocument.body').should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
    .then(cy.wrap)
  }