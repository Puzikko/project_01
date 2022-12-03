import axios from "axios";
import React from "react";
import classUsers from './Users.module.css';
import Photo from '../../images/Snapchat-Logo.jpg';

const Users = (props) => {

    // {
    //     "name": "Arsik08",
    //         "id": 26953,
    //             "uniqueUrlName": null,
    //                 "photos": {
    //         "small": null,
    //             "large": null
    //     },
    //     "status": null,
    //         "followed": false
    // }

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    debugger
                    props.setUsers(response.data.items)
                });
        };
    };

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div className={classUsers.userPhoto} >
                        <img src={Photo} />
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(user.id)}>Follow</button>}
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
        </div>
    )
};

export default Users;