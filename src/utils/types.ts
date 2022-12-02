import { type } from 'os';
import PropTypes from 'prop-types';
import React from 'react';

/*export const ingredientType = PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number
})

export const modalType = {
    isOpen: PropTypes.bool, 
    disableCloseButton: PropTypes.bool,
    disableCloseOverlay: PropTypes.bool,
    disableOverlay: PropTypes.bool
}*/
export type modalType = {
    isOpen?: boolean; 
    disableCloseButton?: boolean;
    disableCloseOverlay?: boolean;
    disableOverlay?: boolean;
    closeCallback?: () => void;
}

export type ingredientType = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
    uuid?: string;
}

export type modalHookType = {
    open: ()=>void;
    close: ()=>void;
    modalProps: {
        isOpen: boolean;
        disableCloseButton: boolean;
        disableCloseOverlay: boolean;
        disableOverlay: boolean;
    }
    children?: React.ReactNode;
}

export type TUserData = {
    email: string;
    name: string;
    role?: number;
}
export type TLoginForm = {
    email: string;
    password: string;
}

export type TRegisterForm = {
    name: string;
    email: string;
    password: string;
}
export type TEditForm = TRegisterForm;

/*export type TOrder = {
    name: string;
    order: {
        number?: number;
    };
    success: boolean;
}*/
export type TOrder = {
    name: string;
    ingredients: Array<string>;
    success: boolean;
    number: number;
    status: string;
    _id: string;
    updatedAt: string;
    createdAt: string;
}

export type TWsFeed = {
    orders: Array<TOrder>;
    total: number;
    totalToday: number;
}