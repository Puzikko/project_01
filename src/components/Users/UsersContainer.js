import React from "react";
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setUsersTotalCount, setCurrentPage, setToggleIsFetching, setToggleIsButtonDisable } from "../../redux/UserReducer";
import Users from './Users.jsx';
import Preloader from "../Preloader/Preloader";
import { usersAPI } from "../../api/api";
class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setToggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {

                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount);
                this.props.setToggleIsFetching(false);
            })
    };

    onPageChanged = (page) => {
        this.props.setToggleIsFetching(true);
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setToggleIsFetching(false);
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
                unfollow={this.props.unfollow}
                isButtonDisable={this.props.isButtonDisable}
                setToggleIsButtonDisable={this.props.setToggleIsButtonDisable} />
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
        isButtonDisable: state.usersPage.isButtonDisable
    }
};

const UsersContainer = connect(mapStateToProps,
    { follow, unfollow, setUsers, setUsersTotalCount, setCurrentPage, setToggleIsFetching, setToggleIsButtonDisable })
    (UsersAPIComponent);

export default UsersContainer;