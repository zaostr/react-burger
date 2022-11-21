import { TOrder } from '../../utils/types';
import {
    //WS_USER_NAME_UPDATE,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS,
    TWsFeedActions
    //WS_GET_MESSAGE
  } from '../actions/ws';
  
  export type TFeedState = {
    wsConnected: boolean;
    success: boolean,
    fail: boolean,
    request: boolean,
    list: Array<TOrder>;
    total: number;
    totalDay: number;
  };
  
  const initialState: TFeedState = {
    wsConnected: false,
    success: false,
    fail: false,
    request: false,
    list: [],
    total: 0,
    totalDay: 0
  };
  
  export const wsReducer = (state = initialState, action: TWsFeedActions) => {
    switch (action.type) {
      case WS_CONNECTION_SUCCESS:
        return {
          ...state,
          wsConnected: true
        };
  
      case WS_CONNECTION_ERROR:
        return {
          ...state,
          wsConnected: false
        };
  
      case WS_CONNECTION_CLOSED:
        return initialState;
  
      case WS_GET_ORDERS:
        return {
          ...state,
          list: action.payload.orders,
          total: action.payload.total,
          totalDay: action.payload.totalToday
        };
  
      /*case WS_GET_MESSAGE:
        return {
          ...state,
          messages: state.messages.length
            ? [...state.messages, { ...action.payload, timestamp: new Date().getTime() / 1000 }]
            : [{ ...action.payload, timestamp: new Date().getTime() / 1000 }]
        };
      case WS_USER_NAME_UPDATE:
        return {
          ...state,
          user: action.payload
        };*/
  
      default:
        return state;
    }
  };