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
    return async (dispatch) => {
        await dispatch(authMeThunk());
        await dispatch(initializedSuccessAC());
    }
};