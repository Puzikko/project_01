import { getUserProfileThunk } from './ProfileReducer';
import { profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
import { Navigate } from 'react-router-dom';

const SET_TOGGLE_IS_CHECKED = 'SET-TOGGLE-IS-CHECKED';

let initialState = {
    isChecked: false,
};

export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOGGLE_IS_CHECKED:
            return {
                ...state,
                isChecked: !state.isChecked
            }
        default:
            return state;
    }
};

export const setToggleIsChecked = () => {
    return { type: SET_TOGGLE_IS_CHECKED }
}

export const saveProfileInfoThunk = (formData, userId) => async (dispatch) => {
    let data = await profileAPI.putProfileInfo(formData)
    if (data.resultCode === 0) {
        dispatch(getUserProfileThunk(userId));
    } else {
        dispatch(stopSubmit("settings", { _error: data.messages }));
        return Promise.reject(data.messages);
    }
    <Navigate replace to={'/profile' + userId} />;
}