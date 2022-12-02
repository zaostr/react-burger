import { TOrder } from '../../utils/types';
import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS,
    TWsFeedActions
} from '../actions/ws';
  
export type TFeedState = {
    wsConnected: boolean;
    fail: boolean,
    request: boolean,
    list: Array<TOrder>;
    total: number;
    totalDay: number;
};
  
export const initialWsState: TFeedState = {
    wsConnected: false,
    fail: false,
    request: false,
    list: [],
    total: 0,
    totalDay: 0
};
  
export const wsReducer = (state = initialWsState, action: TWsFeedActions) => {
    switch (action.type) {
    case WS_CONNECTION_SUCCESS:
        return {
            ...state,
            wsConnected: true
        };

    case WS_CONNECTION_ERROR:
        return {
            ...state,
            fail: true,
            wsConnected: false
        };

    case WS_CONNECTION_CLOSED:
        return initialWsState;

    case WS_GET_ORDERS:
        return {
            ...state,
            list: action.payload.orders,
            total: action.payload.total,
            totalDay: action.payload.totalToday
        };

    default:
        return state;
    }
};