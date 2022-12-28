import React from 'react';
import classDialogs from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogUser = (props) => {

    let dialog = props.dialogsData.map((dialog, index) =>
        <div>
            <img></img>
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