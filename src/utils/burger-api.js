import { baseUrl } from "./constants";
import { getCookie, setCookie } from './data';

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


export const refreshAccessToken = async (refreshToken) => {
    return await fetch(
        `${baseUrl}/auth/token`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: refreshToken
            })
        }
    )
}
export const getAccessToken = async () => {
    let token = getCookie('authToken');
    let refreshToken = getCookie('refreshToken');

    if ( !(token && refreshToken) ) {
        return false
    }

    if (!token) {
        token = await refreshAccessToken(refreshToken)
            .then(checkReponse)
            .then(data => {
                let authToken = data.accessToken.replace('Bearer ', '');
                setCookie('authToken', authToken, {path: '/', 'max-age': 1200});
                setCookie('refreshToken', data.refreshToken, {path: '/', 'max-age': 12000});
                return authToken;
            })
        return token
    }
}

export const getUserRequest = async () => {
    let token = await getAccessToken();
    if (!token) {
        return false;
    }
    return await fetch(
        `${baseUrl}/auth/user`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
    )
}
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