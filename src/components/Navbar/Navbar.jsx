import React from 'react';
import classNavbar from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import Currency from './Currency';

const Navbar = (props) => {
    let first = Math.floor(Math.random() * 5);
    let second = Math.floor(Math.random() * 5);
    let third = Math.floor(Math.random() * 5);
    return (
        <nav className={classNavbar.nav}>
            <div className={classNavbar.link}>
                <NavLink to='/profile/'
                    className={({ isActive }) => isActive ? classNavbar.active : ''}>Profile</NavLink>
            </div>
            <div className={classNavbar.link}>
                <NavLink to='/dialogs'
                    className={({ isActive }) => isActive ? classNavbar.active : ''}>Messages</NavLink>
            </div>
            <div className={classNavbar.link}>
                <NavLink to='/users'
                    className={({ isActive }) => isActive ? classNavbar.active : ''}>Users</NavLink>
            </div>
            <div className={classNavbar.link}>
                <NavLink to='/news'
                    className={({ isActive }) => isActive ? classNavbar.active : ''}>News</NavLink>
            </div>
            <div className={classNavbar.link}>
                <NavLink to='/music'
                    className={({ isActive }) => isActive ? classNavbar.active : ''}>Music</NavLink>
            </div>
            <div className={classNavbar.link}>
                <NavLink to='/settings'
                    className={({ isActive }) => isActive ? classNavbar.active : ''}>Settings</NavLink>
            </div>

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
            {/* <Currency /> */}
        </nav>
    )
}

export default Navbar;