import React from 'react';
import classDialogs from './Dialogs.module.css';
import DialogUser from './DialogUser/DialogUser';
import Message from './Message/Message';

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
                    <DialogUser arrayOfDialogUser={dialogsData} />
                </div>
                <div>
                    <Message arrayOfMessages={messagesData} />
                </div>
            </div>
        </div>
    );
}

export default Dialogs