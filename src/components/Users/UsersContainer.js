import React from "react";
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setUsersTotalCount, setCurrentPage, setToogleIsFetching } from "../../redux/UserReducer";
import axios from "axios";
import Users from './Users.jsx';
import Preloader from "../Preloader/Preloader";
class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setToogleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
                this.props.setToogleIsFetching(false);
            })
    };

    onPageChanged = (page) => {
        this.props.setToogleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setToogleIsFetching(false);
            });
        this.props.setCurrentPage(page);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow} />
        </>
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
};

const UsersContainer = connect(mapStateToProps,
    { follow, unfollow, setUsers, setUsersTotalCount, setCurrentPage, setToogleIsFetching })
    (UsersAPIComponent);

export default UsersContainer;