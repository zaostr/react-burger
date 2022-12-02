import { errorHandlerReducer as reducer, errorHandlerState as initialState } from "../../services/reducers/errorHandler";
import {
    ERROR_INSERT,
    ERROR_REMOVE,
    ERROR_STATE
} from '../../services/actions/errorHandler'

const exampleError = {
    message: 'Some error, don\'t worry',
    code: 444
};
const exampleErrorState = {
    ...exampleError,
    status: true
};

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle ERROR_INSERT', () => {

        expect(reducer(
            initialState, {
            type: ERROR_INSERT,
            payload: exampleError
        })).toEqual({
            ...exampleError,
            status: true
        })
    })

    it('should handle ERROR_REMOVE', () => {
        expect(reducer({
            ...exampleErrorState
        }, {
            type: ERROR_REMOVE
        })).toEqual(initialState)
    })

    it('should handle ERROR_STATE', () => {
        expect(reducer({
            ...exampleErrorState
        }, {
            type: ERROR_STATE,
            payload: false
        })).toEqual({
            ...exampleErrorState,
            status: false
        })
    })
})