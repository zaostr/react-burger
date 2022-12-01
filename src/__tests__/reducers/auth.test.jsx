import { authReducer as reducer } from "../../services/reducers/auth";
import {
    AUTH_SIGN_IN,
    AUTH_SIGN_OUT,
    AUTH_REQUEST
} from '../../services/actions/auth';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            isAuthorized: false,
            user: false,
            request: false
        })
    })

    it('should handle AUTH_REQUEST', () => {
        expect(reducer({
            isAuthorized: false,
            user: false,
            request: false
        }, {
            type: AUTH_REQUEST,
            payload: true
        })).toEqual({
            isAuthorized: false,
            user: false,
            request: true
        })
    })

    it('should handle AUTH_SIGN_IN', () => {
        const exampleUser = {
            name: 'Alex',
            email: 'sasha.zao@mail.ru'
        };

        expect(reducer({
            isAuthorized: false,
            user: false,
            request: false
        }, {
            type: AUTH_SIGN_IN,
            payload: exampleUser
        })).toEqual({
            isAuthorized: true,
            user: {
                ...exampleUser,
                role: 1
            },
            request: false
        })
    })

    it('should handle AUTH_SIGN_OUT', () => {
        const exampleUserState = {
            name: 'Alex',
            email: 'sasha.zao@mail.ru',
            role: 1
        };

        expect(reducer({
            isAuthorized: true,
            user: exampleUserState,
            request: false
        }, {
            type: AUTH_SIGN_OUT
        })).toEqual({
            isAuthorized: false,
            user: false,
            request: false
        })
    })
})