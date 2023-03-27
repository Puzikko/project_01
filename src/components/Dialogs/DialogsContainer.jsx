import React from 'react';
import classDialogs from './Dialogs.module.css';
import { sendMessage } from '../../redux/DialogReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import DialogUser from './DialogUser/DialogUser';
import Message from './Message/Message';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { getDialogsData, getMessagesData } from '../../redux/DialogsSelector';

class DialogsContainer extends React.Component {

    render() {
        return (
            <>
                <div className={classDialogs.homePage}>
                    <div className={classDialogs.userDialogs}>
                        <DialogUser dialogsData={this.props.dialogsData} />
                    </div>
                    <div>
                        <Message messagesData={this.props.messagesData}
                            sendMessage={this.props.sendMessage} />
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dialogsData: getDialogsData(state),
        messagesData: getMessagesData(state),
    }
}

const Dialogs = compose(
    connect(mapStateToProps, { sendMessage }),
    WithAuthRedirect
)(DialogsContainer)

export default Dialogs