describe('Login', () => {
  it('Consegue preencher o formulário', () => {
    cy.visit('/login')

    cy.get('#normal_login_username')
      .type('teste@email.com')
      .should("have.value", "teste@email.com")

    cy.get('#normal_login_password')
      .type('123321')
      .should("have.value", "123321");
  })
})
