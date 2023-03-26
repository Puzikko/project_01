import { authMeThunk } from "./AuthReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';
const CHANGE_IS_ERROR = 'CHANGE_IS_ERROR';

let initialState = {
    initialized: false,
    errorText: 'Error1 & Error2',
    isError: true,
};

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        case CHANGE_IS_ERROR:
            return {
                ...state,
                isError: false
            }
        default:
            return state;
    };
};

export const initializedSuccessAC = () => {
    return { type: INITIALIZED_SUCCESS }
};

export const changeToggleIsError = () => {
    return { type: CHANGE_IS_ERROR }
};

export const initializeAppTC = () => {
    return async (dispatch) => {
        await dispatch(authMeThunk());
        await dispatch(initializedSuccessAC());
    }
};
