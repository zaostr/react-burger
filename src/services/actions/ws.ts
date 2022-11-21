import { TWsFeed } from "../../utils/types";

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_ORDERS: 'WS_GET_ORDERS' = 'WS_GET_ORDERS';
//export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';
//export const WS_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';
//export const WS_USER_NAME_UPDATE: 'WS_USER_NAME_UPDATE' = 'WS_USER_NAME_UPDATE';


export interface IWsConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: string;
}
export interface IWsConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS
}
export interface IWsConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR
}
export interface IWsConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED
}
export interface IWsGetOrders {
  readonly type: typeof WS_GET_ORDERS,
  readonly payload: TWsFeed
}

export type TWsFeedActions = IWsConnectionStart | IWsConnectionSuccess | IWsConnectionError | IWsConnectionClosed | IWsGetOrders;

export const wsConnectionStart = (url: string) => {
  return {
    type: WS_CONNECTION_START,
    payload: url
  };
};

export const wsConnectionSuccess = () => {
  return {
    type: WS_CONNECTION_SUCCESS
  };
};

export const wsConnectionError = () => {
  return {
    type: WS_CONNECTION_ERROR
  };
};

export const wsConnectionClosed = () => {
  return {
    type: WS_CONNECTION_CLOSED
  };
};

export const wsGetOrders = (orders: TWsFeed) => {
  return {
    type: WS_GET_ORDERS,
    payload: orders
  }
}
/*
export const wsGetMessage = (message:string) => {
  return {
    type: WS_GET_MESSAGE,
    payload: message
  };
};

export const wsSendMessage = (message:string) => {
  return {
    type: WS_SEND_MESSAGE,
    payload: message
  };
};

export const wsUserNameUpdate = (userName:string) => {
  return {
    type: WS_USER_NAME_UPDATE,
    payload: userName
  };
};*/