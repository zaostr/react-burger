/// <reference types="cypress"/>

import { wait } from "@testing-library/user-event/dist/utils";

describe('burger constructor test', () => {
  before(() => {
    cy.visit('http://localhost:3000/');
    cy.get('main').should('contain', 'Соберите бургер');
    cy.wait(2000);

    /*cy.intercept(
        'https://norma.nomoreparties.space/api/auth/login',
        {fixture: 'userResponse.json'}
    );
    cy.intercept({
      url: 'https://norma.nomoreparties.space/api/auth/login',
      method: 'POST',
    }).as('search')*/
  });
  
  /*it('should login', () => {
    cy.get('input[name=email]').type('alex.zaostr@ya.ru').should('have.value', 'alex.zaostr@ya.ru');

    cy.get('input[name=password]').type('Zaostr').should('have.value', 'Zaostr');
    
    cy.get('.loginForm').submit();
    cy.get('main').should('contain', 'Соберите бургер');
  })*/
  
  it('should open ingredient details', () => {
    cy.get('#IngredientsListSectionWrapper a').first().click();

    cy.get('[class*=modal_modalBox__]').contains('Детали ингредиента');
    
    cy.get('[class*=modal_modalClsoeButton__]').click();

    cy.get('#IngredientsListSectionWrapper a').last().click();

    cy.get('[class*=modal_modalBox__]').contains('Детали ингредиента');
    
    cy.get('[class*=modal_modalClsoeButton__]').click();
  })
  
  /*it('should add bun', () => {
    const dataTransfer = new DataTransfer();
    cy.get('#IngredientsListSectionWrapper a').first().trigger('dragstart', {
      dataTransfer
    })

    cy.get('[class*=constructor-element_constructor-element_pos_top').trigger('drop');
  })*/

  /*it('should add other ingredients', () => {
    const dataTransfer = new DataTransfer();
    cy.get('#IngredientsListSectionWrapper a:nth-child(5)').trigger('dragstart', {
      dataTransfer
    })

    cy.get('[class*=burger-constructor-elements_EmptyList__').trigger('drop');


    cy.get('#IngredientsListSectionWrapper a:nth-child(4)').first().trigger('dragstart', {
      dataTransfer
    })

    cy.get('[class*=burger-constructor-elements_EmptyList__').trigger('drop');
  })*/

  it('should process order', () => {
    /* Login */
    cy.visit('http://localhost:3000/login');

    cy.get('input[name=email]').type('alex.zaostr@ya.ru').should('have.value', 'alex.zaostr@ya.ru');

    cy.get('input[name=password]').type('pass').should('have.value', 'pass');
    
    cy.intercept({
      url: 'https://norma.nomoreparties.space/api/auth/login',
      method: 'POST',
    }, {
      statusCode: 200,
      body: {
        success: true,
        accessToken: "testtoken",
        refreshToken: "testtoken",
        user: {
          email: "alex.zaostr@ya.ru",
          name: "Alex"
        }
      }
  }).as('userLogin');

    cy.get('.loginForm').submit();
    cy.wait('@userLogin');

    cy.get('main').should('contain', 'Соберите бургер');
    cy.wait(2000);
    /* Login */
    
    /* Adding ingredients */
    const dataTransfer = new DataTransfer();
    cy.get('#IngredientsListSectionWrapper a').first().trigger('dragstart', {
      dataTransfer
    });

    cy.get('[class*=constructor-element_constructor-element_pos_top').trigger('drop');

    cy.get('#IngredientsListSectionWrapper a:nth-child(5)').trigger('dragstart', {
      dataTransfer
    });

    cy.get('[class*=burger-constructor-elements_EmptyList__').trigger('drop');

    cy.get('#IngredientsListSectionWrapper a:nth-child(4)').first().trigger('dragstart', {
      dataTransfer
    });

    cy.get('[class*=burger-constructor-elements_EmptyList__').trigger('drop');
    /* Adding ingredients */

    /* Proccessing the order */
    cy.intercept({
      url: 'https://norma.nomoreparties.space/api/orders',
      method: 'POST',
    }, {
      statusCode: 200,
      body: {
        success: true,
        name: "Астероидный люминесцентный флюоресцентный бургер",
        order: {
            ingredients: [
                {
                    _id: "60d3b41abdacab0026a733c7",
                    name: "Флюоресцентная булка R2-D3",
                    type: "bun",
                    proteins: 44,
                    fat: 26,
                    carbohydrates: 85,
                    calories: 643,
                    price: 988,
                    image: "https://code.s3.yandex.net/react/code/bun-01.png",
                    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                    __v: 0
                },
                {
                    _id: "60d3b41abdacab0026a733c8",
                    name: "Филе Люминесцентного тетраодонтимформа",
                    type: "main",
                    proteins: 44,
                    fat: 26,
                    carbohydrates: 85,
                    calories: 643,
                    price: 988,
                    image: "https://code.s3.yandex.net/react/code/meat-03.png",
                    image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
                    image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
                    __v: 0
                },
                {
                    _id: "60d3b41abdacab0026a733d4",
                    name: "Сыр с астероидной плесенью",
                    type: "main",
                    proteins: 84,
                    fat: 48,
                    carbohydrates: 420,
                    calories: 3377,
                    price: 4142,
                    image: "https://code.s3.yandex.net/react/code/cheese.png",
                    image_mobile: "https://code.s3.yandex.net/react/code/cheese-mobile.png",
                    image_large: "https://code.s3.yandex.net/react/code/cheese-large.png",
                    __v: 0
                }
            ],
            _id: "63890fd19b518a001bb8c38c",
            owner: {
                name: "Alex",
                email: "alex.zaostr@ya.ru",
                createdAt: "2022-10-13T22:57:00.131Z",
                updatedAt: "2022-10-17T22:57:54.737Z"
            },
            status: "done",
            name: "Астероидный люминесцентный флюоресцентный бургер",
            createdAt: "2022-12-01T20:34:25.342Z",
            updatedAt: "2022-12-01T20:34:27.973Z",
            number: 31734,
            price: 6118
        }
      }
    }).as('orderMock');

    cy.get('[class*=burger-constructor-footer_burgerConstructorFooter__] button').click();
    
    cy.get('[class*=modal_modalBox__]').contains('Ваш заказ формируется');

    cy.wait('@orderMock');

    cy.get('[class*=modal_modalBox__]').contains('31734');

    cy.get('[class*=modal_modalBox__]').contains('идентификатор заказа');
    
    cy.get('[class*=modal_modalBox__]').contains('Ваш заказ начали готовить');
    
    cy.get('[class*=modal_modalClsoeButton__]').click();
    /* Proccessing the order */
  })
})