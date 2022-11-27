import React from "react";
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from "../../redux/UserReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;