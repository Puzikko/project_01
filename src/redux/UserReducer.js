import { usersAPI } from "../api/api";

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

const followUnfollowCase = (users, value, action, bool) => {
    return users.map(user => {
        if (user[value] === action.userID) {
            return { ...user, followed: bool };
        };
        return user;
    })
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: followUnfollowCase(state.users, 'id', action, true)
            };
        case UNFOLLOW:
            return {
                ...state,
                users: followUnfollowCase(state.users, 'id', action, false)
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

const followSuccess = (userID) => ({ type: FOLLOW, userID });
const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID });
const setUsers = (users) => ({ type: SET_USERS, users });
const setUsersTotalCount = (totalUsersCount) => ({ type: SET_USERS_TOTAL_COUNT, totalUsersCount });
const setToggleIsFetching = (isFetching) => ({ type: SET_TOGGLE_IS_FETCHING, isFetching });
const setToggleIsButtonDisable = (isFetching, userId) => ({ type: SET_TOGGLE_IS_BUTTON_DISABLE, isFetching, userId })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });

export const getUsersThunk = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setToggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
        dispatch(setCurrentPage(currentPage))
        dispatch(setToggleIsFetching(false));
    }
}

const followUnfollowFlow = async (dispatch, userID, apiMethod, actionCreator) => {
    dispatch(setToggleIsButtonDisable(true, userID));
    let data = await apiMethod(userID)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userID));
        dispatch(setToggleIsButtonDisable(false, userID));
    }
};

export const unfollow = (userID) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.unfollow;
        followUnfollowFlow(dispatch, userID, apiMethod, unfollowSuccess)
    }
};

export const follow = (userID) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.follow;
        followUnfollowFlow(dispatch, userID, apiMethod, followSuccess)
    }
};