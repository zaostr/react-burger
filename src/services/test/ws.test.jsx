import { wsReducer as reducer } from "../reducers/ws";
import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS
} from '../actions/ws';


describe('websocket reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            wsConnected: false,
            fail: false,
            request: false,
            list: [],
            total: 0,
            totalDay: 0
        })
    })

    it('should handle WS_CONNECTION_SUCCESS', () => {
        expect(reducer({
            wsConnected: false,
            fail: false,
            request: false,
            list: [],
            total: 0,
            totalDay: 0
        }, {
            type: WS_CONNECTION_SUCCESS
        })).toEqual({
            wsConnected: true,
            fail: false,
            request: false,
            list: [],
            total: 0,
            totalDay: 0
        })
    })

    it('should handle WS_CONNECTION_ERROR', () => {
        expect(reducer({
            wsConnected: true,
            fail: false,
            request: false,
            list: [],
            total: 0,
            totalDay: 0
        }, {
            type: WS_CONNECTION_ERROR
        })).toEqual({
            wsConnected: false,
            fail: true,
            request: false,
            list: [],
            total: 0,
            totalDay: 0
        })
    })

    it('should handle WS_CONNECTION_CLOSED', () => {
        expect(reducer({
            wsConnected: true,
            fail: false,
            request: false,
            list: [],
            total: 0,
            totalDay: 0
        }, {
            type: WS_CONNECTION_CLOSED
        })).toEqual({
            wsConnected: false,
            fail: false,
            request: false,
            list: [],
            total: 0,
            totalDay: 0
        })
    })

    it('should handle WS_GET_ORDERS', () => {
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

        expect(reducer({
            wsConnected: true,
            fail: false,
            request: false,
            list: [],
            total: 0,
            totalDay: 0
        }, {
            type: WS_GET_ORDERS,
            payload: examplePayload
        })).toEqual({
            wsConnected: true,
            fail: false,
            request: false,
            list: examplePayload.orders,
            total: examplePayload.total,
            totalDay: examplePayload.totalToday
        })
    })
})