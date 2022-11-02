import React from 'react';
import classDialogs from './../Dialogs.module.css';
import {updateNewMessageText} from "../../../redux/state";


const Message = (props) => {

    let message = props.messagesData.map(message =>
        <div>
            <img></img>
            {message.message}
        </div>
    )

    let sendMessage = React.createRef();
    const fnSendMessage = () => {
        props.sendMessage()
    }

    const onChangeMessage = () => {
        debugger;
        let newChar = sendMessage.current.value;
        props.updateNewMessageText(newChar);
    }

    return (
        <div className={classDialogs.userMessages}>
            <div>
                {message}
            </div>
            <div>
                <textarea ref={sendMessage}
                          onChange={onChangeMessage}
                          value={props.newMessageText}
                />
                <div>
                    <button onClick={fnSendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Message