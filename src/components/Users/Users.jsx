import axios from "axios";
import React from "react";
import classUsers from './Users.module.css';
import Photo from '../../images/Snapchat-Logo.jpg';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            })
    };

    setCurrentPage(page) {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
        this.props.setCurrentPage(page)
    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= 20; i++) { pages.push(i) };

        return (<div>
            {pages.map(p => {
                return (
                    <span key={p}
                        className={this.props.currentPage === p ? classUsers.currentPage : ''}
                        onClick={() => { this.setCurrentPage(p) }} > {p} </span>
                )
            })}

            <span key={pagesCount}
                className={this.props.currentPage === pagesCount ? classUsers.currentPage : ''}
                onClick={() => { this.setCurrentPage(pagesCount) }} > {`... ${pagesCount}`} </span>

            {this.props.users.map(user => <div key={user.id}>
                <span>
                    <div className={classUsers.userPhoto} >
                        <img src={Photo} />
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                            : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
                    </div>
                </span>

                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>user.status</div>
                    </span>
                    <span>
                        <div>user.location.country</div>
                        <div>user.location.city</div>
                    </span>
                </span>
            </div>
            )}
        </div>)
    }
};

export default Users;