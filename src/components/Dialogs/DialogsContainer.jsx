import React from 'react';
import classDialogs from './Dialogs.module.css';
import { sendMessage, onChangeMessage } from '../../redux/DialogReducer';
import { connect } from 'react-redux';
import DialogUser from './DialogUser/DialogUser';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';

class DialogsContainer extends React.Component {

    render() {
        if (!this.props.isAuth) return <Navigate replace to='/login' />
        return (
            <>
                <div className={classDialogs.homePage}>
                    <div className={classDialogs.userDialogs}>
                        <DialogUser dialogsData={this.props.dialogsData} />
                    </div>
                    <div>
                        <Message {...this.props} />
                    </div>
                </div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth,
    }
}

const Dialogs = connect(mapStateToProps, { sendMessage, onChangeMessage })(DialogsContainer)

export default Dialogs