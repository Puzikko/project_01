import React from 'react';
import DialogUser from "./DialogUser";
import StoreContext from "../../../StoreContext";
import { connect } from 'react-redux';

// const DialogUserContainer = () => {

//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 return <DialogUser dialogsData={store.getState().dialogsPage.dialogsData}/>
//             }}
//         </StoreContext.Consumer>
//     )

// }

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData
    }
}

const DialogUserContainer = connect(mapStateToProps)(DialogUser);

export default DialogUserContainer