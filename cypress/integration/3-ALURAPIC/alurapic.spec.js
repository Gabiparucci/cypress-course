describe("Login e registro de usuários", () => {
  beforeEach(() => {
    cy.visit("https://alura-fotos.herokuapp.com");
  });

  it("verifica mensagens validação", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Email is required!").should("be.visible");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "User name is required!").should("be.visible");
    cy.contains("ap-vmessage", "Password is required!").should("be.visible");
    cy.contains("ap-vmessage", "Full name is required!").should("be.visible");
  });

  it("verifica mensagem de e-mail inválido", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get('input[formcontrolname="email"]').type("gabi");
    cy.contains("ap-vmessage", "Invalid e-mail").should("be.visible");
  });

  it("verifica senha com menos de 8 caracteres", () => {
    cy.contains("a", "Register now").click();
    cy.get('input[formcontrolname="password"]').type("123");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Mininum length is 8").should("be.visible");
  });

  it("verifica nome completo com menos de 2 caracteres", () => {
    cy.contains("a", "Register now").click();
    cy.get('input[formcontrolname="fullName"]').type("g");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Mininum length is 2").should("be.visible");
  });

  it("verifica username com menos de 2 caracteres", () => {
    cy.contains("a", "Register now").click();
    cy.get('input[formcontrolname="userName"]').type("g");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Mininum length is 2").should("be.visible");
  });
});
