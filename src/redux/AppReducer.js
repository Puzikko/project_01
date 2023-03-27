import { authMeThunk } from "./AuthReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';
const SET_ERROR_TEXT = 'SET_ERROR_TEXT';
const DELETE_ERROR_TEXT = 'DELETE_ERROR_TEXT';

let initialState = {
    initialized: false,
    errorText: '',
    isError: false,
};

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        case DELETE_ERROR_TEXT:
            return {
                ...state,
                errorText: '',
                isError: false,
            }
        case SET_ERROR_TEXT:
            return {
                ...state,
                errorText: action.errorText,
                isError: true,
            }
        default:
            return state;
    };
};

export const initializedSuccessAC = () => {
    return { type: INITIALIZED_SUCCESS }
};

export const deleteErrorText = () => {
    return { type: DELETE_ERROR_TEXT }
};

export const setErrorText = (errorText) => {
    return { type: SET_ERROR_TEXT, errorText }
};

export const initializeAppTC = () => {
    return async (dispatch) => {
        await dispatch(authMeThunk());
        await dispatch(initializedSuccessAC());
    }
};
