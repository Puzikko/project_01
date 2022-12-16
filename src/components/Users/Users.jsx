import React from "react";
import classUsers from './Users.module.css';
import Photo from '../../images/Snapchat-Logo.jpg';
import { NavLink } from "react-router-dom";
import axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 20; i++) { pages.push(i) };

    return <div>
        {pages.map(p => {
            return (
                <span key={p}
                    className={props.currentPage === p ? classUsers.currentPage : ''}
                    onClick={() => { props.onPageChanged(p) }} > {p} </span>
            )
        })}

        <span key={pagesCount}
            className={props.currentPage === pagesCount ? classUsers.currentPage : ''}
            onClick={() => { props.onPageChanged(pagesCount) }} > {`... ${pagesCount}`} </span>

        {props.users.map(user => <div key={user.id}>
            <span>
                <div className={classUsers.userPhoto} >
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null || undefined ? user.photos.small : Photo} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                withCredentials: true,
                                'API-KEY': '0ad28b8c-6eb9-4b81-bc2e-be90139f7712'
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(user.id);
                                    }
                                })
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                withCredentials: true,
                                'API-KEY': '0ad28b8c-6eb9-4b81-bc2e-be90139f7712'
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(user.id);
                                    }
                                })

                        }}>Follow</button>}
                </div>
            </span>

            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status === null || undefined ? 'Without status.' : user.status}</div>
                </span>
                <span>
                    <div>user.location.country</div>
                    <div>user.location.city</div>
                </span>
            </span>
        </div>
        )}
    </div>
}

export default Users;