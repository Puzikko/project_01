import React from "react";
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, setUsersTotalCountAC, setCurrentPageAC } from "../../redux/UserReducer";
import Users from "./Users.jsx";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow(userID) {
            dispatch(followAC(userID))
        },
        unfollow(userID) {
            dispatch(unfollowAC(userID))
        },
        setUsers(users) {
            dispatch(setUsersAC(users))
        },
        setUsersTotalCount(totalUsersCount) {
            dispatch(setUsersTotalCountAC(totalUsersCount))
        },
        setCurrentPage(page) {
            debugger
            dispatch(setCurrentPageAC(page))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;