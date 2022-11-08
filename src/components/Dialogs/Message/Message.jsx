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
        props.dispatch({type: 'SEND-MESSAGE'})
    }

    const onChangeMessage = () => {
        let newChar = sendMessage.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newChar});
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