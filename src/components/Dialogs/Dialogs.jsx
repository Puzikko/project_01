import React from 'react';
import classDialogs from './Dialogs.module.css';
import DialogUserContainer from "./DialogUser/DialogUserContainer";
import MessageContainer from "./Message/MessageContainer";

const Dialogs = () => {
    return (
        <div>
            <div className={classDialogs.homePage}>
                <div className={classDialogs.userDialogs}>
                    <DialogUserContainer />
                </div>
                <div>
                    <MessageContainer />
                </div>
            </div>
        </div>
    );
}

export default Dialogs