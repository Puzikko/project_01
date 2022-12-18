const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOGGLE_IS_FETCHING = 'SET-TOGGLE-IS-FETCHING';
const SET_TOGGLE_IS_BUTTON_DISABLE = 'SET-TOGGLE-IS-BUTTON-DISABLE';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isButtonDisable: [],
};

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: true };
                    };
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: false };
                    };
                    return user;
                })
            };
        case SET_USERS:
            return { ...state, users: [...action.users] };
        case SET_USERS_TOTAL_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.page };
        case SET_TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        case SET_TOGGLE_IS_BUTTON_DISABLE:
            return {
                ...state,
                isButtonDisable: action.isFetching
                    ? [...state.isButtonDisable, action.userId]
                    : state.isButtonDisable.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

export const follow = (userID) => ({ type: FOLLOW, userID });
export const unfollow = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_USERS_TOTAL_COUNT, totalUsersCount });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setToggleIsFetching = (isFetching) => ({ type: SET_TOGGLE_IS_FETCHING, isFetching });
export const setToggleIsButtonDisable = (isFetching, userId) => ({ type: SET_TOGGLE_IS_BUTTON_DISABLE, isFetching, userId })