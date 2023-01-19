import React from "react";
import LogInForm from "./LoginForm";
import { logInThunk } from './../../redux/AuthReducer';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const LogIn = (props) => {
    // ф-ия onSubmit собирает все приходящие данные из формы логина (formData)
    const onSubmit = (formData) => {
        props.logInThunk(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) { return <Navigate to={'/profile/' + props.userId} /> }

    return <div>
        <h1>Login</h1>
        <LogInForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.id,
    }
}

export default connect(mapStateToProps, { logInThunk })(LogIn);