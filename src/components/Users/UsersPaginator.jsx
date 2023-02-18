import React from "react";
import classUsers from './Users.module.css';
import Photo from '../../images/Snapchat-Logo.jpg';
import { NavLink } from "react-router-dom";

let UsersPaginator = ({ users, isButtonDisable, follow, unfollow }) => {
    return <>
        {users.map(user => <div key={user.id}>
            <span>
                <div className={classUsers.userPhoto} >
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small ? user.photos.small : Photo}
                            alt='' />
                    </NavLink>
                </div>
                <>
                    {user.followed

                        ? <button disabled={isButtonDisable.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>Unfollow</button>

                        : <button disabled={isButtonDisable.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>}
                </>
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
    </>
}

export default UsersPaginator;