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
            let indexNext = state.index + 1;
            return {
                ...state,
                index: indexNext
            };
        case SET_PREV_PHOTO:
            let indexPrev = state.index - 1;
            return {
                ...state,
                index: indexPrev
            };
        default:
            return state;
    };
};

export const getPhotos = (photos) => {
    return { type: ADD_ARRAY_OF_PHOTOS, photos }
};
export const setImgSrc = (src) => {
    return { type: SET_IMG_SRC, src }
}
export const setToggleIsFetching = (isFetching) => {
    return { type: SET_TOGGLE_IS_FETCHING, isFetching }
};
export const nextPhoto = () => {
    return { type: SET_NEXT_PHOTO }
}
export const prevPhoto = () => {
    return { type: SET_PREV_PHOTO }
}