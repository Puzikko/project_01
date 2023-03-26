import React from "react";
import LogInForm from "./LoginForm";
import { logInThunk } from './../../redux/AuthReducer';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuth, getUserId, getCaptchaURL } from "../../redux/AuthSelector";

const LogIn = ({ logInThunk, isAuth, userId, captchaURL }) => {
    // ф-ия onSubmit собирает все приходящие данные из формы логина (formData)
    const onSubmit = (formData) => {
        logInThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth) { return <Navigate to={'/profile/' + userId} /> }

    return <div>
        <h1>Login</h1>
        <LogInForm onSubmit={onSubmit} captchaURL={captchaURL} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        userId: getUserId(state),
        captchaURL: getCaptchaURL(state),
    }
}

export default connect(mapStateToProps, { logInThunk })(LogIn);