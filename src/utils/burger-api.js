import { baseUrl } from "./constants";

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