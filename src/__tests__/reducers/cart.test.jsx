import { cartReducer as reducer } from "../../services/reducers/cart";
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


describe('cart reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            list: [],
            total: 0,
            orderRequest: false,
            orderSuccess: false,
            orderFail: false,
            orders: []
        })
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

        expect(reducer({
            list: [],
            total: 0,
            orderRequest: false,
            orderSuccess: false,
            orderFail: false,
            orders: []
        }, {
            type: CART_INSERT_ITEM,
            payload: ingredient
        })).toEqual({
            list: [
                ingredient
            ],
            total: 0,
            orderRequest: false,
            orderSuccess: false,
            orderFail: false,
            orders: []
        })
    })

    it('should handle CART_REMOVE_ITEM', () => {
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

        expect(reducer({
            list: exampleList,
            total: 0,
            orderRequest: false,
            orderSuccess: false,
            orderFail: false,
            orders: []
        }, {
            type: CART_REMOVE_ITEM,
            payload: {
                index: 1
            }
        })).toEqual({
            list: [
                ingredient1
            ],
            total: 0,
            orderRequest: false,
            orderSuccess: false,
            orderFail: false,
            orders: []
        })
    })

    it('should handle CART_CLEAR', () => {
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

        expect(reducer({
            list: exampleList,
            total: 0,
            orderRequest: false,
            orderSuccess: false,
            orderFail: false,
            orders: []
        }, {
            type: CART_CLEAR
        })).toEqual({
            list: [],
            total: 0,
            orderRequest: false,
            orderSuccess: false,
            orderFail: false,
            orders: []
        })
    })

    it('should handle CART_TOTAL', () => {
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

        let state = {
            list: exampleList,
            total: 0,
            orderRequest: false,
            orderSuccess: false,
            orderFail: false,
            orders: []
        };

        expect(reducer(state, {
            type: CART_TOTAL
        })).toEqual({
            ...state,
            total: 369
        })
    })

    it('should handle CART_SORT_LIST', () => {
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

        expect(reducer({
            list: exampleList,
            total: 0,
            orderRequest: false,
            orderSuccess: false,
            orderFail: false,
            orders: []
        }, {
            type: CART_SORT_LIST,
            payload: {
                oldIndex: 0,
                newIndex: 1,
                item: ingredient1
            }
        })).toEqual({
            list: [
                ingredient2,
                ingredient1
            ],
            total: 0,
            orderRequest: false,
            orderSuccess: false,
            orderFail: false,
            orders: []
        })
    })

    it('should handle CART_ORDER_REQUEST', () => {
        expect(reducer({
            list: [],
            total: 0,
            orderRequest: false,
            orderSuccess: false,
            orderFail: false,
            orders: []
        }, {
            type: CART_ORDER_REQUEST,
            payload: true
        })).toEqual({
            list: [],
            total: 0,
            orderRequest: true,
            orderSuccess: false,
            orderFail: false,
            orders: []
        })
    })

    it('should handle CART_ORDER_SUCCESS', () => {
        expect(reducer({
            list: [],
            total: 0,
            orderRequest: false,
            orderSuccess: false,
            orderFail: false,
            orders: []
        }, {
            type: CART_ORDER_SUCCESS
        })).toEqual({
            list: [],
            total: 0,
            orderRequest: false,
            orderSuccess: true,
            orderFail: false,
            orders: []
        })
    })

    it('should handle CART_ORDER_FAIL', () => {
        expect(reducer({
            list: [],
            total: 0,
            orderRequest: false,
            orderSuccess: false,
            orderFail: false,
            orders: []
        }, {
            type: CART_ORDER_FAIL
        })).toEqual({
            list: [],
            total: 0,
            orderRequest: false,
            orderSuccess: false,
            orderFail: true,
            orders: []
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

        expect(reducer({
            list: [],
            total: 0,
            orderRequest: false,
            orderSuccess: false,
            orderFail: false,
            orders: []
        }, {
            type: CART_SAVE_ORDER,
            payload: exampleOrder
        })).toEqual({
            list: [],
            total: 0,
            orderRequest: false,
            orderSuccess: false,
            orderFail: false,
            orders: [
                exampleOrder
            ]
        })
    })
})