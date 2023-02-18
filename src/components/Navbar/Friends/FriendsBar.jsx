import React from "react";
import classNavbar from '../Navbar.module.css';

const FriendsBar = (props) => {
    let first = Math.floor(Math.random() * 5);
    let second = Math.floor(Math.random() * 5);
    let third = Math.floor(Math.random() * 5);

    const randomFriend = (number) => {
        return (
            <div className={classNavbar.friendBlock}>
                <img alt=""></img>
                <div> {props.dialogsData[number].name} </div>
            </div>
        )
    };

    return <>
        <h2>Friends</h2>
        <div className={classNavbar.friendsBar}>
            {randomFriend(first)}
            {randomFriend(second)}
            {randomFriend(third)}
        </div>
    </>
};

export default FriendsBar;