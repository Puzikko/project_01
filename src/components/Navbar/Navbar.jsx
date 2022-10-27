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

            <h2>Friends</h2>

            <div className={classNavbar.friendsBar}>

                <div className={classNavbar.friendBlock}>
                    <img></img>
                    <div> { props.dialogsData[0].name } </div>
                </div>
                <div className={classNavbar.friendBlock}>
                    <img></img>
                    <div> { props.dialogsData[1].name } </div>
                </div>
                <div className={classNavbar.friendBlock}>
                    <img></img>
                    <div> { props.dialogsData[2].name } </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;