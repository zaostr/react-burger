import { ingredientsReducer as reducer } from "../reducers/ingredients";
import { TApplicationActions as types } from '../types'


describe('ingredients reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            list: [],
            ingredientsRequest: false,
            failedRequest: false,
            successRequest: false,
            detailed: false
        })
    })

    it('should handle INGREDIENTS_REQUEST', () => {
        expect(reducer({
            list: [],
            ingredientsRequest: false,
            failedRequest: false,
            successRequest: false,
            detailed: false
        }, {
            type: types.INGREDIENTS_GET_REQUEST
        })).toEqual({
            list: [],
            ingredientsRequest: true,
            failedRequest: false,
            successRequest: false,
            detailed: false
        })
    })

    it('should handle INGREDIENTS_SET_LIST', () => {
        const exampleList = [
            {
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
            }
        ];

        expect(reducer({
            list: [],
            ingredientsRequest: false,
            failedRequest: false,
            successRequest: false,
            detailed: false
        }, {
            type: types.INGREDIENTS_SET_LIST,
            payload: exampleList
        })).toEqual({
            list: exampleList,
            ingredientsRequest: false,
            failedRequest: false,
            successRequest: false,
            detailed: false
        })
    })

    it('should handle INGREDIENTS_REQUEST_FAILED', () => {
        expect(reducer({
            list: [],
            ingredientsRequest: false,
            failedRequest: true,
            successRequest: false,
            detailed: false
        }, {
            type: types.INGREDIENTS_REQUEST_FAILED
        })).toEqual({
            list: [],
            ingredientsRequest: true,
            failedRequest: false,
            successRequest: false,
            detailed: false
        })
    })

    it('should handle INGREDIENTS_REQUEST_SUCCESS', () => {
        expect(reducer({
            list: [],
            ingredientsRequest: false,
            failedRequest: false,
            successRequest: true,
            detailed: false
        }, {
            type: types.INGREDIENTS_REQUEST_SUCCESS
        })).toEqual({
            list: [],
            ingredientsRequest: true,
            failedRequest: false,
            successRequest: false,
            detailed: false
        })
    })

    it('should handle INGREDIENTS_SET_LIST', () => {
        const exampleDetailed = {
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
            ingredientsRequest: false,
            failedRequest: false,
            successRequest: false,
            detailed: false
        }, {
            type: types.INGREDIENTS_SET_DETAILED,
            payload: exampleDetailed
        })).toEqual({
            list: [],
            ingredientsRequest: false,
            failedRequest: false,
            successRequest: false,
            detailed: exampleDetailed
        })
    })

    it('should handle INGREDIENTS_CLEAR_DETAILED', () => {
        const exampleDetailed = {
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
            ingredientsRequest: false,
            failedRequest: false,
            successRequest: false,
            detailed: exampleDetailed
        }, {
            type: types.INGREDIENTS_CLEAR_DETAILED
        })).toEqual({
            list: [],
            ingredientsRequest: false,
            failedRequest: false,
            successRequest: false,
            detailed: false
        })
    })
})