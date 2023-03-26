import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const IS_AUTH = 'IS-AUTH';
const CAPTCHA_URL = 'CAPTCHA-URL';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null,
};

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case IS_AUTH:
            return {
                ...state,
                ...action.payload,
            };
        case CAPTCHA_URL:
            return {
                ...state,
                captchaURL: action.captchaURL,
            };
        default:
            return state;
    };
};

const setIsAuth = (payload) => {
    return { type: IS_AUTH, payload }
};

const setCaptchaURL = (captchaURL) => {
    return { type: CAPTCHA_URL, captchaURL }
};

export const authMeThunk = () => {
    return async (dispatch) => {
        let data = await authAPI.authMe();
        if (data.resultCode === 0) {
            dispatch(setIsAuth({ ...data.data, isAuth: true }))
        }
    };
};

const captchaThunk = () => {
    return async (dispatch) => {
        let data = await authAPI.captcha();
        dispatch(setCaptchaURL(data.url));
    };
};

export const logInThunk = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.logIn(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(authMeThunk());
    } else if (response.data.resultCode === 10) {
        dispatch(captchaThunk());
    } else {
        //stopSubmit - это actionCreator из redux-form, чтобы остановить submit формы
        //1-ый аргумент - уникальное название формы, 2-ой - ошибка для какого Field, 
        //а _error - общая ошибка для всей формы и сюда мы передаём ошибку из response с сервера
        let action = stopSubmit('login', { _error: response.data.messages });
        dispatch(action);
    };
};
export const logOutThunk = () => async (dispatch) => {
    let response = await authAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(setIsAuth({
            id: null,
            email: null,
            login: null,
            isAuth: false,
            captchaURL: null,
        }))
    }
};