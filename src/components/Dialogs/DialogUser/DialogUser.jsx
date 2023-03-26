import React from 'react';
import classDialogs from './../Dialogs.module.css';
import { Navigate, NavLink } from "react-router-dom";

const DialogUser = ({ dialogsData }) => {
    let dialog = dialogsData.map((dialog, index) =>
        <div key={index}>
            <img alt=''></img>
            <NavLink key={index} to={'/dialogs/' + dialog.id}
                className={({ isActive }) => isActive ? classDialogs.active : ''}>{dialog.name}</NavLink>
        </div>)

    return (
        <div className={classDialogs.dialog}>
            {dialog}
        </div>
    )
}

export default DialogUser