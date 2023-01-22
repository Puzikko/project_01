import React from "react";
import { connect } from 'react-redux';
import { compose } from "redux";
import { follow, unfollow, setCurrentPage, getUsersThunk } from "../../redux/UserReducer";
import Users from './Users.jsx';
import Preloader from "../common/Preloader/Preloader";
import { Navigate } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    };

    onPageChanged = (page) => {
        this.props.getUsersThunk(page, this.props.pageSize)
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
                unfollow={this.props.unfollow}
                isButtonDisable={this.props.isButtonDisable} />
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
        isButtonDisable: state.usersPage.isButtonDisable,
    }
};

const UsersContainer = compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsersThunk }),
    //WithAuthRedirect
)(UsersAPIComponent)

export default UsersContainer;