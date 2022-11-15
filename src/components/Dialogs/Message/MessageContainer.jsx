import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCeator} from "../../../redux/DialogReducer";
import Message from "./Message";


const MessageContainer = (props) => {

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    const onChangeMessage = (newChar) => {
        props.dispatch(updateNewMessageTextActionCeator(newChar));
    }

    return (<Message messagesData={props.dialogsPage.messagesData}
                     newMessageText={props.dialogsPage.newMessageText}
                     sendMessage={sendMessage}
                     onChangeMessage={onChangeMessage}/>
    )
}

export default MessageContainer