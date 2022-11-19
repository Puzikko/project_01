import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCeator } from "../../../redux/DialogReducer";
import Message from "./Message";
import StoreContext from "../../../StoreContext";
import { connect } from 'react-redux';


// const MessageContainer = (props) => {

//     // const sendMessage = () => {
//     //     props.dispatch(sendMessageActionCreator())
//     // }
//     //
//     // const onChangeMessage = (newChar) => {
//     //     props.dispatch(updateNewMessageTextActionCeator(newChar));
//     // }

//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 const sendMessage = () => {
//                     store.dispatch(sendMessageActionCreator())
//                 }

//                 const onChangeMessage = (newChar) => {
//                     store.dispatch(updateNewMessageTextActionCeator(newChar));
//                 }
//               return  (<Message messagesData={store.getState().dialogsPage.messagesData}
//                          newMessageText={store.getState().dialogsPage.newMessageText}
//                          sendMessage={sendMessage}
//                          onChangeMessage={onChangeMessage}/>)
//             }}
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage() {
            return dispatch(sendMessageActionCreator());
        },
        onChangeMessage(newChar) {
            return dispatch(updateNewMessageTextActionCeator(newChar));
        }
    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer