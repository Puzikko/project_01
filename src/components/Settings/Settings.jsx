import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfileUserData } from '../../redux/SettingsSelector';
import SettingsReduxForm from './SettingsForm';
import { saveProfileInfoThunk } from './../../redux/SettingsReducer';
import { getUserId } from './../../redux/AuthSelector';
import { WithAuthRedirect } from './../../hoc/withAuthRedirect';
import { Navigate } from 'react-router-dom';

const Settings = (props) => {
    // const [toggleFetch, setToggleFetch] = useState(false);
    const { profileUserData, userId } = props;
    // useEffect(() => {
    //     debugger
    //     toggleFetch &&
    //         <Navigate replace to={'profile/' + userId} />;
    //     setToggleFetch(false)
    // }, [toggleFetch])
    const onSubmit = (formData) => {
        props.saveProfileInfoThunk(formData, userId)
        // .then(() => {
        //     setToggleFetch(true)
        // })
    };
    // const toFn = () => {
    //     debugger
    //     return <Navigate replace to={'/dialogs/'} />
    // };
    return <>
        {/* <button onClick={() => toFn()}>To</button> */}
        <SettingsReduxForm initialValues={props.initialValues} onSubmit={onSubmit} profileUserData={profileUserData} props={props} />
    </>
};

const SettingsWithAuthRedirect = WithAuthRedirect(Settings)

const mapStateToProps = (state) => {
    return {
        profileUserData: getProfileUserData(state),
        userId: getUserId(state),
    }
}

const SettingsContainer = connect(mapStateToProps, { saveProfileInfoThunk })(SettingsWithAuthRedirect)

export default SettingsContainer;