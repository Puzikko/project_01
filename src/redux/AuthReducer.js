import { authAPI } from "../api/api";

const IS_AUTH = 'IS-AUTH';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
};

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case IS_AUTH:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state;
    };
};

export const setIsAuth = (data) => {
    return { type: IS_AUTH, data }
}

export const logInThunk = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(data => {

                if (data.resultCode === 0) {
                    dispatch(setIsAuth(data.data))
                }
            })
    }
}