import React from "react";
import LogInForm from "./LoginForm";
import { logInThunk } from './../../redux/AuthReducer';

const LogIn = () => {
    // ф-ия onSubmit собирает все приходящие данные из формы логина (formData)
    const onSubmit = (formData) => {
        logInThunk(formData)
    }
    return <div>
        <h1>Login</h1>
        <LogInForm onSubmit={onSubmit} />
    </div>
}

export default LogIn