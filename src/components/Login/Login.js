import React from 'react';
import {Field, reduxForm} from "redux-form";

let LoginForm = (props) => {

    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="login" component="input" type="text" placeholder="Login"/>
            </div>
            <div>
                <Field name="password" component="input" type="password" placeholder="Password"/>
            </div>
            <div>
                <Field name="remember" component="input" type="checkbox" />
                <label htmlFor="remember">Remember Me</label>
            </div>
            <button type="submit">Login</button>
        </form>
    );
};


const Login = () => {

    let handleSubmit = (values) => {
        console.log(values);
    };

    return (
    <div className="app-content">
        <h1>Login</h1>
        <LoginForm handleSubmit={handleSubmit} />
    </div>
    )
};

LoginForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);

export default Login;