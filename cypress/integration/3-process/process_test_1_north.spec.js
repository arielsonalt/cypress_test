describe('Process Test', () => {
    it('Process test reigion north age between 18(including) and 35(including)', () => {
        cy.visit("https://sydle-foundations.sydle.one/#/app/main/userTaskView/61b572bbd08b294ddbd0420c/61b6233ad08b294ddbde02b5")
        cy.get('#login').type('arielson.souza')
        cy.get('#password').type('mudar123')
        cy.get('.sy-btn').click()
        getIframeBody().find('#name',{ timeout: 10000 }).should('be.visible').clear().type("Fausto Domingos Silva Junior")
        getIframeBody().find('#fatherName',{ timeout: 10000 }).should('be.visible').clear().type("Fausto Domingos Silva")
        getIframeBody().find('#motherName',{ timeout: 10000 }).should('be.visible').clear().type("Faustina Domingos Silva")
        getIframeBody().find('[aria-label="Masculino"]').click()
        getIframeBody().find('#street',{ timeout: 10000 }).should('be.visible').clear().type("Artur Bernardes")
        getIframeBody().find('#district',{ timeout: 10000 }).should('be.visible').clear().type("Centro")
        getIframeBody().find('#city',{ timeout: 10000 }).should('be.visible').clear().type("Angra dos Reis")
        getIframeBody().find('#number',{ timeout: 10000 }).should('be.visible').clear().type("25")
        getIframeBody().find('[aria-label="Norte"]').click()
        getIframeBody().find('.ui-calendar-w-btn',{ timeout: 10000 }).should('be.visible').clear().type("21/10/1991")
        cy.wait(2000)
        getIframeBody().find('[title="Concluir"]',{ timeout: 10000, force: true}).should('be.visible').click()
        getIframeBody().find('#cpf',{ timeout: 30000 }).should('be.visible').clear().type("25587412366")
        getIframeBody().find('#educationLevel',{ timeout: 10000 }).should('be.visible').clear().type("3º ano do ensino fundamental")
        getIframeBody().find('#workCardNumber',{ timeout: 10000 }).should('be.visible').clear().type("258745")
        cy.wait(2000)
        getIframeBody().find('[title="Concluir"]',{ timeout: 10000, force: true}).should('be.visible').click()
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