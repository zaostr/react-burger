import { baseUrl } from "./constants";

export const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function getIngredients() {
    return fetch(`${baseUrl}/ingredients`)
    .then(checkReponse)
}