import React from 'react';
import classDialogs from './Dialogs.module.css';
import DialogUser from './DialogUser/DialogUser';
import Message from './Message/Message';

const Dialogs = (props) => {

    return (
        <div>
            <div className={classDialogs.homePage}>
                <div className={classDialogs.userDialogs}>
                    {/* {dialog} */}
                    <DialogUser dialogsData={props.dialogsData}/>
                </div>
                <div>
                    <Message messagesData={props.messagesData} />
                </div>
            </div>
        </div>
    );
}

export default Dialogs