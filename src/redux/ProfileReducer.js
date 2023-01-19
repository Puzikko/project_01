import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE_USER_DATA = 'SET-PROFILE-USER-DATA';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
    postsData: [
        { id: 1, message: 'Good job!', likeCounter: '5' },
        { id: 1, message: "wat's up, men?", likeCounter: '3' },
        { id: 1, message: "yo-yo-yo?", likeCounter: '1' }
    ],
    profileUserData: null,
    status: '',
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 1,
                message: action.postMessage,
                likeCounter: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            };
        case SET_PROFILE_USER_DATA:
            return {
                ...state,
                profileUserData: action.profileUserData,
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    };
};

export const addPost = (postMessage) => {
    return { type: ADD_POST, postMessage }
}
const setProfileUserData = (profileUserData) => {
    return { type: SET_PROFILE_USER_DATA, profileUserData }
}
const setUserStatus = (status) => {
    return { type: SET_USER_STATUS, status }
}
export const getUserProfileThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setProfileUserData(data));
            })
    }
}
export const getUserStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(status => {
                dispatch(setUserStatus(status));
            })
    }
}
export const putUserStatusThunk = (status) => {
    return (dispatch) => {
        profileAPI.putUserStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
                else dispatch(setUserStatus('No status...'))
            })
    }
}