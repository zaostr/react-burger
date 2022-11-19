export const ERROR_INSERT : 'ERROR_INSERT' = 'ERROR_INSERT';
export const ERROR_REMOVE : 'ERROR_REMOVE' = 'ERROR_REMOVE';
export const ERROR_STATE : 'ERROR_STATE'  = 'ERROR_STATE';


export interface IErrorInsertAction {
    readonly type: typeof ERROR_INSERT;
    readonly payload: {
        message: string;
        code: number;
        status: boolean;
    };
}
export interface IErrorRemoveAction {
    readonly type: typeof ERROR_REMOVE;
}
export interface IErrorStateAction {
    readonly type: typeof ERROR_STATE;
    readonly payload: boolean;
}

export type TErrorActions = IErrorInsertAction | IErrorRemoveAction | IErrorStateAction;