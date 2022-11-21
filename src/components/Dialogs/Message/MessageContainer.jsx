import { sendMessageActionCreator, updateNewMessageTextActionCeator } from "../../../redux/DialogReducer";
import Message from "./Message";
import { connect } from 'react-redux';

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