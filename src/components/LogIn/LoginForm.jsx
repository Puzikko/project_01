import React from "react";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControl";
import classLoginForm from "../common/FormsControls/FormsControl.module.css";

const LogInForm = ({ handleSubmit, error }) => {
    //у тега <form> есть событие onSubmit (как и у нативной формы)
    return <form onSubmit={handleSubmit}>
        <div>
            {/* Field - это компонент библиотеки, который принимает свои props, 
            а component={'input'} - это тэг который отрисуется в HTML.
            name - обязательное свойство со своим именем.
            В devConsole введи store.getState().form и увидишь, как меняется state при вводе дааных в форму. */}
            <Field placeholder="Login" name='email'
                component={Input} validate={[requiredField]} />
        </div>
        <div>
            <Field placeholder="Password" name='password' type='password'
                component={Input} validate={[requiredField]} />
        </div>
        <div>
            <Field type="checkbox" name='rememberMe' component={Input} />Remember me
        </div>
        {error && <div className={classLoginForm.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

//В reduxForm происходит настройка формы и передаётся компонент. Т.о. образуется контейнерная компонента. 
const LoginReduxForm = reduxForm({
    //a unique name for the form
    form: 'login'
})(LogInForm)

export default LoginReduxForm