import React from 'react';
import classDialogs from './Dialogs.module.css';
import DialogUser from './DialogUser/DialogUser';
import Message from './Message/Message';
import {updateNewMessageText} from "../../redux/state";

const Dialogs = (props) => {

    return (
        <div>
            <div className={classDialogs.homePage}>
                <div className={classDialogs.userDialogs}>
                   <DialogUser dialogsData={props.dialogsData}/>
                </div>
                <div>
                    <Message messagesData={props.messagesData}
                             newMessageText={props.newMessageText}
                             sendMessage={props.sendMessage}
                             updateNewMessageText={props.updateNewMessageText}/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs