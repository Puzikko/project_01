import React from 'react';
import classDialogs from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogUser = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classDialogs.dialog}>
            <NavLink to={path}
            className={({isActive}) => isActive ? classDialogs.active : ''}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classDialogs.userMessages}>
            <div>{props.message}</div>
        </div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Serega'},
        {id: 2, name: 'Valenta'},
        {id: 3, name: 'Arsenchik'},
        {id: 4, name: 'Davy Johnes'},
        {id: 5, name: 'Sharky'}
    ]

    let messagesData = [
        {id: 1, message: 'Wassssup men?'},
        {id: 1, message: 'How much is the fish?'},
        {id: 1, message: 'Check the microphone!'}
    ]

    let dialog = dialogsData.map(dialog => <DialogUser name={dialog.name} id={dialog.id}/>)
    let message = messagesData.map(message => <Message message={message.message}/>)

    return (
        <div>
            <div className={classDialogs.homePage}>
                <div className={classDialogs.userDialogs}>
                    { dialog }
                </div>
                <div>
                    { message }
                </div>
            </div>
        </div>
    );
}

export default Dialogs