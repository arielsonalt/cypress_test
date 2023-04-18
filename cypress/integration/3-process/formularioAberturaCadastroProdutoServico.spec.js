const fieldMap = {
    portalUrl: "portal-materdei-dev.sydle.com",
    enterButton: 'Entrar',
    login: '[formcontrolname="username"]',
    password: '[formcontrolname="password"]',
    loginButton: '[type="submit"]',
    openTicketCard: 'Abrir Ticket'
}
before('Logijn to the application', function() {
    cy.visit(fieldMap.portalUrl);
    cy.contains(fieldMap.enterButton,{ timeout: 10000 });
    cy.contains(fieldMap.enterButton).click();
    cy.get(fieldMap.login).type("arielson.souza");
    cy.get(fieldMap.password).type("mudar123");
    cy.get(fieldMap.loginButton).click({force:true});
})

describe('Teste Portal - Mater Dei', () => {
    it('Teste Formulário Abertura - Cadastro Produto/Serviço', () => {
        
        cy.contains(" Solicitações ",{ timeout: 10000 });
        cy.contains(fieldMap.openTicketCard).click({force:true})
        cy.contains("Cadastro de Produto/Serviço",{ timeout: 10000 }).click({force:true})
console.log("oi")
    })
  })
