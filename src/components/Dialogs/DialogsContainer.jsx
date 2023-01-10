import React from 'react';
import classDialogs from './Dialogs.module.css';
import { sendMessage } from '../../redux/DialogReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import DialogUser from './DialogUser/DialogUser';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';

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
    }
}

const Dialogs = compose(
    connect(mapStateToProps, { sendMessage }),
    WithAuthRedirect
)(DialogsContainer)

export default Dialogs