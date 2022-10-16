import { baseUrl } from "./constants";
import { getCookie, setCookie } from './data';

export const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function getIngredientsRequest() {
    return fetch(`${baseUrl}/ingredients`)
            .then(checkReponse)
}
export async function makeOrder(orderState) {
    let requestBody = orderState.list.map(ingredient => ingredient._id);
    return await fetch(
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

    if ( refreshToken === undefined ) {
        return false
    }

    if ( token === undefined ) {
        token = await refreshAccessToken(refreshToken)
            .then(checkReponse)
            .then(data => {
                let authToken = data.accessToken.replace('Bearer ', '');
                setCookie('authToken', authToken, {path: '/', 'max-age': 1200});
                setCookie('refreshToken', data.refreshToken, {path: '/', 'max-age': 12000});
                return authToken;
            })
        return token
    } else {
        return token
    }
}

export const getUserRequest = async () => {
    let token = await getAccessToken();
    if (!token) {
        return false;
    }
    return await fetch(
        `${baseUrl}/auth/user?authorization`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
    )
    .then(checkReponse)
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
    ).then(checkReponse)
}
export const editUserDataRequest = async form => {
    let token = await getAccessToken();
    if (!token) {
        return false;
    }
    return await fetch(
        `${baseUrl}/auth/user`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(form)
        }
    ).then(checkReponse)
}

export const resetPasswordRequest = async form => {
    return await fetch(
        `${baseUrl}/password-reset`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }
    ).then(checkReponse)
}
export const changePasswordRequest = async form => {
    return await fetch(
        `${baseUrl}/password-reset/reset`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }
    ).then(checkReponse)
}