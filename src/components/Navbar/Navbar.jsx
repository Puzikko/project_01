import React from 'react';
import classNavbar from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={classNavbar.nav}>
            <div className={classNavbar.link}>
                <NavLink to='/profile'
                         className={({isActive}) => isActive ? classNavbar.active : ''}>Profile</NavLink>
            </div>
            <div className={classNavbar.link}>
                <NavLink to='/dialogs'
                         className={({isActive}) => isActive ? classNavbar.active : ''}>Messages</NavLink>
            </div>
            <div className={classNavbar.link}>
                <NavLink to='/news'
                         className={({isActive}) => isActive ? classNavbar.active : ''}>News</NavLink>
            </div>
            <div className={classNavbar.link}>
                <NavLink to='/music'
                         className={({isActive}) => isActive ? classNavbar.active : ''}>Music</NavLink>
            </div>
            <div className={classNavbar.link}>
                <NavLink to='/settings'
                         className={({isActive}) => isActive ? classNavbar.active : ''}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;