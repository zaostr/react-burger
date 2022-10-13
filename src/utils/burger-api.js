import { baseUrl } from "./constants";
import { getCookie } from './data';

export const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function getIngredientsRequest() {
    return fetch(`${baseUrl}/ingredients`)
            .then(checkReponse)
}
export function makeOrder(orderState) {
    let requestBody = orderState.list.map(ingredient => ingredient._id);
    return fetch(
        `${baseUrl}/orders`,
        {
            method: 'post',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ingredients: requestBody})
    })
    .then(checkReponse)
}
export const getUserRequest = async () =>
    await fetch(
        `${baseUrl}/auth/token`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getCookie('authToken')
            }
        }
    )
export const loginRequest = async form => {
    return await fetch(
        `${baseUrl}/auth/login`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }
    )
    .then(checkReponse)
}
export const registerRequest = async form => {
    return await fetch(
        `${baseUrl}/auth/register`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }
    )
}