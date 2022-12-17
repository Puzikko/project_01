import React from "react";
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setUsersTotalCount, setCurrentPage, setToogleIsFetching } from "../../redux/UserReducer";
import Users from './Users.jsx';
import Preloader from "../Preloader/Preloader";
import { usersAPI } from "../../api/api";
class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setToogleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {

                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount);
                this.props.setToogleIsFetching(false);
            })
    };

    onPageChanged = (page) => {
        this.props.setToogleIsFetching(true);
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
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