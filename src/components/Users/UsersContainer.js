import React from "react";
import { connect } from 'react-redux';
import { compose } from "redux";
import { follow, unfollow, setCurrentPage, getUsersThunk } from "../../redux/UserReducer";
import Users from './Users.jsx';
import Preloader from "../common/Preloader/Preloader";
import { getIsButtonDisable, getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/UserSelector";
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
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isButtonDisable: getIsButtonDisable(state),
    }
};

const UsersContainer = compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsersThunk }),
    //WithAuthRedirect
)(UsersAPIComponent)

export default UsersContainer;