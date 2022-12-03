import axios from "axios";
import React from "react";
import classUsers from './Users.module.css';
import Photo from '../../images/Snapchat-Logo.jpg';

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }
    render() {
        return (<div>
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