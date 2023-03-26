import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE_USER_DATA = 'SET-PROFILE-USER-DATA';
const SET_USER_STATUS = 'SET-USER-STATUS';
const SET_PROFILE_PHOTOS = 'SET-PROFILE-PHOTOS'

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
        case SET_PROFILE_PHOTOS:
            return {
                ...state,
                ...state.profileUserData,
                photos: action.photos
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
const setProfilePhotos = (photos) => {
    return { type: SET_PROFILE_PHOTOS, photos }
}
export const getUserProfileThunk = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getUserProfile(userId)
        dispatch(setProfileUserData(data));
    }
}
export const getUserStatusThunk = (userId) => {
    return async (dispatch) => {
        let status = await profileAPI.getUserStatus(userId)
        dispatch(setUserStatus(status));
    }
}
export const putUserStatusThunk = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.putUserStatus(status)
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
        else dispatch(setUserStatus('No status...'))
    }
}
export const putUserNewPhotoThunk = (file) => {
    return async (dispatch) => {
        let data = await profileAPI.putProfilePhoto(file)
        if (data.resultCode === 0) {
            dispatch(setProfilePhotos(data.data))
        }
    }
}