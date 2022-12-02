import { wsReducer as reducer, initialWsState as initialState } from "../../services/reducers/ws";
import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS
} from '../../services/actions/ws';


describe('websocket reducer', () => {
    const examplePayload = {
        orders: [
            {
                name: 'Top burger',
                ingredients: ['defef-def-awd','defef-def-awd-2'],
                success: true,
                number: 1234,
                status: 'done',
                _id: 'rwedw-defef-def',
                updatedAt: '2022-12-01T12:00:00',
                createdAt: '2022-12-01T11:00:00',
            },
            {
                name: 'Top burger too',
                ingredients: ['defef-def-awd','defef-def-awd-2','defef-def-awd-fdf'],
                success: true,
                number: 1234,
                status: 'done',
                _id: 'rwedw-defef-def-2',
                updatedAt: '2022-12-01T13:00:00',
                createdAt: '2022-12-01T12:00:00',
            }
        ],
        total: 123,
        totalToday: 12
    };

    
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle WS_CONNECTION_SUCCESS', () => {
        expect(reducer(
            initialState, {
            type: WS_CONNECTION_SUCCESS
        })).toEqual({
            ...initialState,
            wsConnected: true
        })
    })

    it('should handle WS_CONNECTION_ERROR', () => {
        expect(reducer({
            ...initialState,
            wsConnected: true,
        }, {
            type: WS_CONNECTION_ERROR
        })).toEqual({
            ...initialState,
            wsConnected: false,
            fail: true,
        })
    })

    it('should handle WS_CONNECTION_CLOSED', () => {
        expect(reducer({
            ...initialState,
            wsConnected: true,
        }, {
            type: WS_CONNECTION_CLOSED
        })).toEqual(initialState)
    })

    it('should handle WS_GET_ORDERS', () => {

        expect(reducer({
            ...initialState,
            wsConnected: true,
        }, {
            type: WS_GET_ORDERS,
            payload: examplePayload
        })).toEqual({
            ...initialState,
            wsConnected: true,
            list: examplePayload.orders,
            total: examplePayload.total,
            totalDay: examplePayload.totalToday
        })
    })
})