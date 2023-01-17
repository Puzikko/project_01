import { authAPI } from "../api/api";

const IS_AUTH = 'IS-AUTH';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case IS_AUTH:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    };
};

const setIsAuth = (payload) => {
    return { type: IS_AUTH, payload }
};

export const authMeThunk = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(data => {

                if (data.resultCode === 0) {
                    dispatch(setIsAuth({ ...data.data, isAuth: true }))
                }
            })
    }
};
export const logInThunk = (email, password, rememberMe) => (dispatch) => {
    debugger
    authAPI.logIn(email, password, rememberMe)
        .then(response => {
            debugger
            if (response.data.resultCode === 0) {
                dispatch(authMeThunk())
            }
        }
        )

};
export const logOutThunk = () => (dispatch) => {
    debugger
    authAPI.logOut()
        .then(response => {
            debugger
            if (response.data.resultCode === 0) {
                dispatch(setIsAuth({
                    id: null,
                    email: null,
                    login: null,
                    isAuth: false,
                }))
            }
        }
        )

};