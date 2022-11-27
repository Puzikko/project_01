import React from "react";
import classUsers from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoURL: 'https://i.pinimg.com/originals/c7/73/f4/c773f4d77f6088a92d4ac01b94b8296d.jpg',
                    followed: false, fullName: 'Serega', status: 'Perpetum mobile.', location: { city: 'Warsaw', country: 'Poland' }
                },
                {
                    id: 2,
                    photoURL: 'https://i.pinimg.com/originals/c7/73/f4/c773f4d77f6088a92d4ac01b94b8296d.jpg',
                    followed: true, fullName: 'Valentinka', status: 'Perpetum mobile.', location: { city: 'Minsk', country: 'Belarus' }
                },
                {
                    id: 3,
                    photoURL: 'https://i.pinimg.com/originals/c7/73/f4/c773f4d77f6088a92d4ac01b94b8296d.jpg',
                    followed: true, fullName: 'Arsenchik', status: 'Perpetum mobile.', location: { city: 'Moscow', country: 'Russia' }
                },
            ]
        )
    }

    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div className={classUsers.userPhoto} >
                        <img src={user.photoURL} />
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(user.id)}>Follow</button>}
                    </div>
                </span>

                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>
            )}
        </div>
    )
};

export default Users;