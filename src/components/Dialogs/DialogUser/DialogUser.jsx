import React from 'react';
import classDialogs from './../Dialogs.module.css';
import { Navigate, NavLink, useNavigate } from "react-router-dom";

const DialogUser = ({ dialogsData }) => {
    // let navigate = useNavigate();
    let dialog = dialogsData.map((dialog, index) =>
        <div>
            <img alt=''></img>
            <NavLink key={index} to={'/dialogs/' + dialog.id}
                className={({ isActive }) => isActive ? classDialogs.active : ''}>{dialog.name}</NavLink>
        </div>)

    // const Fn = () => {
    //     debugger
    //     //navigate('profile/26943')
    //         <Navigate replace={true} to={'/profile/'} />
    // }

    return (
        <div className={classDialogs.dialog}>
            {dialog}
            {/* <button onClick={() => Fn()}>To</button> */}
        </div>
    )
}

export default DialogUser