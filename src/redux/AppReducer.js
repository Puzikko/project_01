import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { authMeThunk } from "./AuthReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
    initialized: false,
};

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    };
};

export const initializedSuccessAC = () => {
    return { type: INITIALIZED_SUCCESS }
};

export const initializeAppTC = () => {
    return (dispatch) => {
        let promise = dispatch(authMeThunk());
        promise.then(dispatch(initializedSuccessAC()))
    }
};
