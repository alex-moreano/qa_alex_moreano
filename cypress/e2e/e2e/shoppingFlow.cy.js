/*Pruebas en SAUCEDEMO 

Tests: flujo de compra Saucedeom LOGIN - AGREGAR OPRODUCTOS - CARRITO - COMPRA - FIN COMPRA
Realizado por: alex-moreano

*/

describe('**Prueba relaziando compras mdiante SAUCEDEMO **', () => {
  it('FLUJO DE COMPRA', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce', { log: false });
    cy.get('[data-test="login-button"]').click();

    // // Agregar dos productos
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Vwer carrito y verifico items
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', 'cart');
    cy.get('.cart_item').should('have.length', 2);
    cy.get('.cart_item .inventory_item_name').then(($els) => {
      const names = [...$els].map((el) => el.innerText.trim());
      expect(names.sort()).to.deep.equal(
        ['Sauce Labs Fleece Jacket', 'Sauce Labs Backpack'].sort()
      );
    });

    // Completar la compra mediante el form
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Alex');
    cy.get('[data-test="lastName"]').type('Moreano');
    cy.get('[data-test="postalCode"]').type('060150');
    cy.get('[data-test="continue"]').click();

    // FIn de la compra y validar mensaje de checkout
    cy.get('[data-test="finish"]').click();
    cy.get('h2.complete-header').should('be.visible').and('have.text', 'Thank you for your order!');
    });
});