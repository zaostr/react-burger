import { ingredientsReducer as reducer, ingredientsState as initialState } from "../../services/reducers/ingredients";
import {
    INGREDIENTS_SET_LIST,
    INGREDIENTS_GET_REQUEST,
    INGREDIENTS_REQUEST_FAILED,
    INGREDIENTS_REQUEST_SUCCESS,
    INGREDIENTS_SET_DETAILED,
    INGREDIENTS_CLEAR_DETAILED
} from '../../services/actions/ingredients'


describe('ingredients reducer', () => {
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


    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle INGREDIENTS_REQUEST', () => {
        expect(reducer(initialState, {
            type: INGREDIENTS_GET_REQUEST
        })).toEqual({
            ...initialState,
            ingredientsRequest: true,
        })
    })

    it('should handle INGREDIENTS_SET_LIST', () => {

        expect(reducer(
            initialState, {
            type: INGREDIENTS_SET_LIST,
            payload: exampleList
        })).toEqual({
            ...initialState,
            list: exampleList,
        })
    })

    it('should handle INGREDIENTS_REQUEST_FAILED', () => {
        expect(reducer({
            ...initialState,
            ingredientsRequest: true
        }, {
            type: INGREDIENTS_REQUEST_FAILED
        })).toEqual({
            ...initialState,
            ingredientsRequest: false,
            failedRequest: true,
        })
    })

    it('should handle INGREDIENTS_REQUEST_SUCCESS', () => {
        expect(reducer({
            ...initialState,
            ingredientsRequest: true,
        }, {
            type: INGREDIENTS_REQUEST_SUCCESS
        })).toEqual({
            ...initialState,
            ingredientsRequest: false,
            successRequest: true,
        })
    })

    it('should handle INGREDIENTS_SET_LIST', () => {

        expect(reducer(
            initialState, {
            type: INGREDIENTS_SET_DETAILED,
            payload: exampleDetailed
        })).toEqual({
            ...initialState,
            detailed: exampleDetailed
        })
    })

    it('should handle INGREDIENTS_CLEAR_DETAILED', () => {

        expect(reducer({
            ...initialState,
            detailed: exampleDetailed
        }, {
            type: INGREDIENTS_CLEAR_DETAILED
        })).toEqual({
            ...initialState,
            detailed: false
        })
    })
})