import { cartReducer as reducer, cartState as initialState } from "../../services/reducers/cart";
import {
    CART_INSERT_ITEM,
    CART_REMOVE_ITEM,
    CART_CLEAR,
    CART_TOTAL,
    CART_SORT_LIST,
    CART_ORDER_REQUEST,
    CART_ORDER_SUCCESS,
    CART_ORDER_FAIL,
    CART_SAVE_ORDER
} from '../../services/actions/cart'

let ingredient1 = {
    _id: 'defef-def-awd',
    name: 'Title',
    type: 'bun',
    proteins: 123,
    fat: 123,
    carbohydrates: 123,
    calories: 123,
    price: 123,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02.png',
    __v: 123
};
let ingredient2 = {
    _id: 'defef-def-awd-2',
    name: 'Title',
    type: 'sauce',
    proteins: 123,
    fat: 123,
    carbohydrates: 123,
    calories: 123,
    price: 123,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02.png',
    __v: 123
};
let exampleList = [
    ingredient1,
    ingredient2
];

describe('cart reducer', () => {


    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle CART_INSERT_ITEM', () => {
        let ingredient = {
            _id: 'defef-def-awd',
            name: 'Title',
            type: 'bun',
            proteins: 123,
            fat: 123,
            carbohydrates: 123,
            calories: 123,
            price: 123,
            image: 'https://code.s3.yandex.net/react/code/bun-02.png',
            image_mobile: 'https://code.s3.yandex.net/react/code/bun-02.png',
            image_large: 'https://code.s3.yandex.net/react/code/bun-02.png',
            __v: 123
        };

        expect(reducer(
            initialState, {
            type: CART_INSERT_ITEM,
            payload: ingredient
        })).toEqual({
            ...initialState,
            list: [
                ingredient
            ]
        })
    })

    it('should handle CART_REMOVE_ITEM', () => {

        expect(reducer({
            ...initialState,
            list: exampleList
        }, {
            type: CART_REMOVE_ITEM,
            payload: {
                index: 1
            }
        })).toEqual({
            ...initialState,
            list: [
                ingredient1
            ]
        })
    })

    it('should handle CART_CLEAR', () => {
        expect(reducer({
            ...initialState,
            list: exampleList
        }, {
            type: CART_CLEAR
        })).toEqual({
            ...initialState,
            list: []
        })
    })

    it('should handle CART_TOTAL', () => {
        expect(reducer({
            ...initialState,
            list: exampleList,
        }, {
            type: CART_TOTAL
        })).toEqual({
            ...initialState,
            list: exampleList,
            total: 369
        })
    })

    it('should handle CART_SORT_LIST', () => {
        expect(reducer({
            ...initialState,
            list: exampleList
        }, {
            type: CART_SORT_LIST,
            payload: {
                oldIndex: 0,
                newIndex: 1,
                item: ingredient1
            }
        })).toEqual({
            ...initialState,
            list: [
                ingredient2,
                ingredient1
            ]
        })
    })

    it('should handle CART_ORDER_REQUEST', () => {
        expect(reducer(
            initialState, {
            type: CART_ORDER_REQUEST,
            payload: true
        })).toEqual({
            ...initialState,
            orderRequest: true,
        })
    })

    it('should handle CART_ORDER_SUCCESS', () => {
        expect(reducer(
            initialState, {
            type: CART_ORDER_SUCCESS
        })).toEqual({
            ...initialState,
            orderSuccess: true
        })
    })

    it('should handle CART_ORDER_FAIL', () => {
        expect(reducer(
            initialState, {
            type: CART_ORDER_FAIL
        })).toEqual({
            ...initialState,
            orderFail: true,
        })
    })

    it('should handle CART_SAVE_ORDER', () => {
        let exampleOrder = {
            name: 'Top burger',
            ingredients: ['defef-def-awd','defef-def-awd-2'],
            success: true,
            number: 1234,
            status: 'done',
            _id: 'rwedw-defef-def',
            updatedAt: '2022-12-01T13:00:00',
            createdAt: '2022-12-01T12:00:00',
        };

        expect(reducer(
            initialState, {
            type: CART_SAVE_ORDER,
            payload: exampleOrder
        })).toEqual({
            ...initialState,
            orders: [
                exampleOrder
            ]
        })
    })
})