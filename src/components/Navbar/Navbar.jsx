import React from 'react';
import classNavbar from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import FriendsBar from './Friends/FriendsBar';

const Navbar = (props) => {

    return (
        <nav className={classNavbar.nav}>
            <div className={classNavbar.link}>
                <NavLink to={'/profile/' + (props.isAuth ? props.userId : '')}
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

            {props.isAuth ? <FriendsBar dialogsData={props.dialogsData} /> : null}
        </nav>
    )
}

export default Navbar;