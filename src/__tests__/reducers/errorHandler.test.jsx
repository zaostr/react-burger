import { errorHandlerReducer as reducer } from "../../services/reducers/errorHandler";
import {
    ERROR_INSERT,
    ERROR_REMOVE,
    ERROR_STATE
} from '../../services/actions/errorHandler'


describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            message: '',
            code: 0,
            status: false
        })
    })

    it('should handle ERROR_INSERT', () => {
        const exampleError = {
            message: 'Some error, don\'t worry',
            code: 444
        };

        expect(reducer({
            message: '',
            code: 0,
            status: false
        }, {
            type: ERROR_INSERT,
            payload: exampleError
        })).toEqual({
            ...exampleError,
            status: true
        })
    })

    it('should handle ERROR_REMOVE', () => {
        const exampleErrorState = {
            message: 'Some error, don\'t worry',
            code: 444,
            status: false
        };

        expect(reducer({
            ...exampleErrorState
        }, {
            type: ERROR_REMOVE
        })).toEqual({
            message: '',
            code: 0,
            status: false
        })
    })

    it('should handle ERROR_STATE', () => {
        const exampleErrorState = {
            message: 'Some error, don\'t worry',
            code: 444,
            status: true
        };

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