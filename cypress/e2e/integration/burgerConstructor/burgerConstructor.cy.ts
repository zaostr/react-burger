/// <reference types="cypress"/>

import { wait } from "@testing-library/user-event/dist/utils";

describe('burger constructor test', () => {
  before(() => {
    cy.visit('http://localhost:3000/');
    cy.wait(2000);
  });
  
  it('should open ingredient details', () => {
    cy.get('#IngredientsListSectionWrapper a').first().click();

    cy.get('[class*=modal_modalBox__]').contains('Детали ингредиента');
    
    cy.get('[class*=modal_modalClsoeButton__]').click();
  })
  
  it('should add bun', () => {
    const dataTransfer = new DataTransfer();
    cy.get('#IngredientsListSectionWrapper a').first().trigger('dragstart', {
      dataTransfer
    })

    cy.get('[class*=constructor-element_constructor-element_pos_top').trigger('drop');
  })

  it('should add other ingredients', () => {
    const dataTransfer = new DataTransfer();
    cy.get('#IngredientsListSectionWrapper a:nth-child(5)').trigger('dragstart', {
      dataTransfer
    })

    cy.get('[class*=burger-constructor-elements_EmptyList__').trigger('drop');


    cy.get('#IngredientsListSectionWrapper a:nth-child(4)').first().trigger('dragstart', {
      dataTransfer
    })

    cy.get('[class*=burger-constructor-elements_EmptyList__').trigger('drop');
  })

  it('should process order', () => {
    cy.get('[class*=burger-constructor-footer_burgerConstructorFooter__] button').click();

    wait(15000);
    
    cy.get('[class*=modal_modalClsoeButton__]').click();
  })
})