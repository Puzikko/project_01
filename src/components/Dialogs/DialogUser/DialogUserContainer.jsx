import DialogUser from "./DialogUser";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData
    }
}

const DialogUserContainer = connect(mapStateToProps)(DialogUser);

export default DialogUserContainer