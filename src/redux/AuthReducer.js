import { authAPI } from "../api/api";

const IS_AUTH = 'IS-AUTH';
const SET_IF_LOGIN_CORRECT = 'SET-IF-LOGIN-CORRECT';

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

const setIsAuth = (data) => {
    return { type: IS_AUTH, data }
}
const setIfLoginCorrect = (loginData) => {
    return { type: SET_IF_LOGIN_CORRECT, loginData }
}

export const authMeThunk = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(data => {

                if (data.resultCode === 0) {
                    dispatch(setIsAuth(data.data))
                }
            })
    }
}
export const logInThunk = (formData) => {
    debugger
    authAPI.logIn(formData)
        .then(data => {
            debugger
        }
        )

}