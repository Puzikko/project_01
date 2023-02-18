import { newsAPI } from "../api/api_NASA";

const ADD_ARRAY_OF_PHOTOS = 'ADD-ARRAY-OF-PHOTOS-SRC';
const SET_TOGGLE_IS_FETCHING = 'SET-TOGGLE-IS-FETCHING';
const SET_NEXT_PHOTO = 'SET-NEXT-PHOTO';
const SET_PREV_PHOTO = 'SET-PREV-PHOTO';
const SET_IMG_SRC = 'SET-IMG-SRC';

let initialState = {
    photos: [],
    index: 0,
    src: '',
    isFetching: false,
};

export const newsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ARRAY_OF_PHOTOS:
            return {
                ...state,
                photos: [...action.photos]
            };
        case SET_TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_IMG_SRC:
            return {
                ...state,
                src: action.src
            };
        case SET_NEXT_PHOTO:
            return {
                ...state,
                index: ++state.index
            };
        case SET_PREV_PHOTO:
            return {
                ...state,
                index: --state.index
            };
        default:
            return state;
    };
};

const getPhotos = (photos) => {
    return { type: ADD_ARRAY_OF_PHOTOS, photos }
};
const setToggleIsFetching = (isFetching) => {
    return { type: SET_TOGGLE_IS_FETCHING, isFetching }
};
export const setImgSrc = (src) => {
    return { type: SET_IMG_SRC, src }
}
export const nextPhoto = () => {
    return { type: SET_NEXT_PHOTO }
}
export const prevPhoto = () => {
    return { type: SET_PREV_PHOTO }
}
export const getPhotosThunk = (index) => {
    return async (dispatch) => {
        dispatch(setToggleIsFetching(true));
        let data = await newsAPI.getPhotos()
        dispatch(getPhotos(data.photos));
        dispatch(setImgSrc(data.photos[index].img_src));
        dispatch(setToggleIsFetching(false));
    }
}