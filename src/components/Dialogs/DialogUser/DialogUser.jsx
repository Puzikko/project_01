import React from 'react';
import classDialogs from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogUser = (props) => {

    let dialog = props.arrayOfDialogUser.map(dialog => 
        <div>
            <NavLink to={'/dialogs/' + dialog.id} 
            className={({isActive}) => isActive ? classDialogs.active : ''}>{dialog.name}</NavLink>
        </div>)

    return (
        <div className={classDialogs.dialog}>
            <div>{ dialog }</div>
        </div>
    )
}

export default DialogUser