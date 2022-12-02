import { TWsFeedActions } from "../services/actions/ws";

export const socketMiddleware = (wsActions: any) => {
    return (store: { dispatch: any; }) => {
      let socket: null | WebSocket = null;
  
      return (next: (arg0: TWsFeedActions) => void) => async (action: any) => {
        const { dispatch } = store;
        const { type, payload } = action;
        const { wsSendMessage, onOpen, onClose, onError, onFeed } = wsActions;
        //
        if (type === wsActions.wsInit) {
          socket = new WebSocket(`${payload}`);
        }
        if (socket !== null) {
          socket.onopen = (event) => {
            dispatch({ type: onOpen, payload: event });
          };
  
          socket.onerror = (event) => {
            dispatch({ type: onError, payload: event });
          };
          
          socket.onmessage = (event) => {
            const { data } = event;
            const parsedData = JSON.parse(data);
            const { success, ...restParsedData } = parsedData;
  
            dispatch({ type: onFeed, payload: restParsedData });
          };
  
          socket.onclose = (event) => {
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