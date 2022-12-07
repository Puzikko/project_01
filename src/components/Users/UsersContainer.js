import React from "react";
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, setUsersTotalCountAC, setCurrentPageAC } from "../../redux/UserReducer";
import axios from "axios";
import Users from './Users.jsx';
class UsersAPIComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            })
    };

    onPageChanged = (page) => {
        debugger
        console.log(this.props.pageSize, this.props.users)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                debugger
                this.props.setUsers(response.data.items)
            });
        this.props.setCurrentPage(page);
    };

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow} />
    }
};

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;