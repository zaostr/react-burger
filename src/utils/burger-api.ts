import { baseUrl } from "./constants";
import { deleteCookie, getCookie, setCookie } from './data';
import { ingredientType, TEditForm, TLoginForm, TRegisterForm } from "./types";


export const checkReponse = (res: Response) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function getIngredientsRequest() {
    return fetch(`${baseUrl}/ingredients`)
            .then(checkReponse)
}
export async function makeOrder(orderState: {
    list: ingredientType[]
}) {
    const token = await getAccessToken();
    if (!token) {
        return false;
    }
    const requestBody = orderState.list.map(ingredient => ingredient._id);
    return await fetch(
        `${baseUrl}/orders`,
        {
            method: 'post',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ingredients: requestBody})
    })
    .then(checkReponse)
}


export const refreshAccessToken = async (refreshToken: string) => {
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
    const refreshToken = getCookie('refreshToken');

    if ( refreshToken === undefined ) {
        return false
    }

    if ( token === undefined ) {
        token = await refreshAccessToken(refreshToken)
            .then(checkReponse)
            .then(data => {
                const authToken = data.accessToken.replace('Bearer ', '');
                setCookie('authToken', authToken, {path: '/', 'max-age': 1200});
                setCookie('refreshToken', data.refreshToken, {path: '/'});
                return authToken;
            })
        return token
    } else {
        return token
    }
}

export const getUserRequest = async () => {
    const token = await getAccessToken();
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
export const loginRequest = async (form: TLoginForm) => {
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
export const registerRequest = async (form: TRegisterForm) => {
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
export const editUserDataRequest = async (form: TEditForm) => {
    const token = await getAccessToken();
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

export const resetPasswordRequest = async (form: {
    email: string;
}) => {
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
export const changePasswordRequest = async (form: {
    token: string;
    password: string;
}) => {
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

export function checkTime(i:number | string) {
	if ( i < 10 ) {
		i = "0" + i;
	}
return i;
}

export function HumanDatePrecise(timestamp: string) {
	let publishDate = new Date(timestamp),
	today = new Date(),
	day = publishDate.getDate(),
	month = publishDate.getMonth()+1,
	year = publishDate.getFullYear(),
	h = checkTime(publishDate.getHours()),
	m = checkTime(publishDate.getMinutes());

	let todayStamp = today.getTime();
	let d = todayStamp - publishDate.getTime();
	d = Math.ceil(d / 1000);
    
	if (d > 0) {
		if (d < 3600) {
			//?????????? ??????????
			switch ( Math.floor(d / 60) ) {
				case 0:
				case 1:
				case 2:
					return "???????????? ??????";
				case 3:
					return "?????? ???????????? ??????????";
				case 4:
					return "???????????? ???????????? ??????????";
				case 5:
					return "???????? ?????????? ???????????? ??????????";
				default:
					return Math.floor(d / 60) + ' ??????. ??????????';
			};
		} else {
			if (d < 18000) {
				//?????????? ??????????
				switch (Math.floor(d / 3600)) {
					case 1:
					return "?????? ??????????";
					case 2:
					return "2 ???????? ??????????";
					case 3:
					return "3 ???????? ??????????";
					case 4:
					return "4 ???????? ??????????";
				};
			} else {
				if (d < 172800) {
					let justDate = new Date();
					if (justDate.getDate() === day) {
						return "??????????????, "+h+":"+m;
					}
					justDate.setDate(justDate.getDate() - 1);
					if (justDate.getDate() === day) {
						return "??????????, "+h+":"+m;
					}
					justDate.setDate(justDate.getDate() - 1);
					if (justDate.getDate() === day) {
						return "2 ?????? ??????????, "+h+":"+m;
					}
				}
			}
		}
	} else {
		// ?? ??????????????
		d *= - 1;
		if (d < 3600) {
			//?????????? ??????????
			switch (Math.floor(d / 60)) {
				case 0:
				case 1:
					return "????????????";
				case 2:
					return "?????????? ?????? ????????????";
				case 3:
					return "?????????? ?????? ????????????";
				case 4:
					return "?????????? ???????????? ????????????";
				case 5:
					return "?????????? ???????? ??????????";

				default:
					return "?????????? " + Math.floor(d / 60) + ' ??????.';
			};
		} else {
			if (d < 18000) {
				//?????????? ??????????
				switch (Math.floor(d / 3600)) {
					case 1:
						return "?????????? ??????";
					case 2:
						return "?????????? ?????? ????????";
					case 3:
						return "?????????? ?????? ????????";
					case 4:
						return "?????????? ???????????? ????????";
				};
			} else {
				if (d < 172800) {
					//??????????????
					let justDate = new Date();
					if (justDate.getDate() === day) {
					  return "??????????????, "+h+":"+m;
					}
					justDate.setDate(justDate.getDate() + 1);
					if (justDate.getDate() === day) {
					  return "????????????, "+h+":"+m;
					}
					justDate.setDate(justDate.getDate() + 2);
					if (justDate.getDate() === day) {
					  return "??????????????????????, "+h+":"+m;
					}
				}
	 			d *= - 1;
			}
		}
	}
	let r = checkTime(day)+"."+checkTime(month);
	if (year !== today.getFullYear() || d < 0) {
		r += '.' + year;
	}
	r += ", "+h+":"+m;
	return r;
};

export const getIngredientCount = ( ingredients: Array<ingredientType>, ingredient: ingredientType ): number => {
    return ingredients.filter(item => item === ingredient).length || 0;
}

export const getIngredientsFromOrder = (list: Array<ingredientType>, ingredients: Array<string>) => {
    return [...ingredients].map(ingredientID => {
        return list.filter(ingredient => ingredientID === ingredient._id)[0];
    })
}

export const getOrderAmount = (ingredients: Array<ingredientType>) => {
    return ingredients.reduce((prev,next) => {
        return prev + next.price
    }, 0)
}