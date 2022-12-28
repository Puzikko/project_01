import React from "react";
import classNavbar from '../Navbar.module.css';

const FriendsBar = (props) => {
    let first = Math.floor(Math.random() * 5);
    let second = Math.floor(Math.random() * 5);
    let third = Math.floor(Math.random() * 5);

    return <>
        <h2>Friends</h2>
        <div className={classNavbar.friendsBar}>
            <div className={classNavbar.friendBlock}>
                <img></img>
                <div> {props.dialogsData[first].name} </div>
            </div>
            <div className={classNavbar.friendBlock}>
                <img></img>
                <div> {props.dialogsData[second].name} </div>
            </div>
            <div className={classNavbar.friendBlock}>
                <img></img>
                <div> {props.dialogsData[third].name} </div>
            </div>
        </div>
    </>
};

export default FriendsBar;