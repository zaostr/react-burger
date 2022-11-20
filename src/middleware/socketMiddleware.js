import { WS_CONNECTION_START } from "../services/actions/ws";

export const socketMiddleware = (wsActions) => {
    return store => {
      let socket = null;
  
      return next => async (action) => {
        const { dispatch } = store;
        const { type, payload } = action;
        const { wsSendMessage, onOpen, onClose, onError, onFeed } = wsActions;
        //
        if (type === WS_CONNECTION_START) {
          socket = new WebSocket(`${payload}`);
        }
        if (socket) {
          socket.onopen = event => {
            dispatch({ type: onOpen, payload: event });
          };
  
          socket.onerror = event => {
            dispatch({ type: onError, payload: event });
          };
          
          socket.onmessage = event => {
            const { data } = event;
            const parsedData = JSON.parse(data);
            const { success, ...restParsedData } = parsedData;
  
            dispatch({ type: onFeed, payload: restParsedData });
          };
  
          socket.onclose = event => {
            dispatch({ type: onClose, payload: event });
          };
  
          if (type === wsSendMessage) {
            const message = { ...payload };
            socket.send(JSON.stringify(message));
          }
        }
  
        next(action);
      };
    };
  };