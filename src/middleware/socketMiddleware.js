import { WS_CONNECTION_START } from "../services/actions/ws";
import { getAccessToken } from "../utils/burger-api";

export const socketMiddleware = (wsActions) => {
    return store => {
      let socket = null;
  
      return next => async (action) => {
        const token = await getAccessToken();
        const { dispatch, getState } = store;
        const { type, payload } = action;
        const { wsInit, wsSendMessage, onOpen, onClose, onError, onFeed } = wsActions;
        //
        if (type === WS_CONNECTION_START) {
          console.log(token);
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
            //console.log(event);
            const { data } = event;
            const parsedData = JSON.parse(data);
            const { success, ...restParsedData } = parsedData;
            console.log(parsedData);
  
            dispatch({ type: onFeed, payload: restParsedData });
          };
          /*socket.onmessage = event => {
            //console.log(event);
            const { data } = event;
            const parsedData = JSON.parse(data);
            const { success, ...restParsedData } = parsedData;
            console.log(parsedData);
  
            //dispatch({ type: onMessage, payload: restParsedData });
          };*/
  
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