import React from "react";
import LogInForm from "./LoginForm";
import { logInThunk } from './../../redux/AuthReducer';
import { authAPI } from "../../api/api";

const LogIn = () => {
    // ф-ия onSubmit собирает все приходящие данные из формы логина (formData)
    const onSubmit = (formData) => {
        // console.log(formData)
        // authAPI.logIn(formData)
        //     .then(data => {
        //         debugger
        //     }
        //     )
        logInThunk(formData)
    }
    return <div>
        <h1>Login</h1>
        <LogInForm onSubmit={onSubmit} />
    </div>
}

export default LogIn