import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Input, maxLengthValidator, required} from "../../elements/form/validation";
import {loginUserThunk} from "../../redux-store/reducers/auth-reducer";

let maxLength = maxLengthValidator(10);

const LoginForm = (props) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="email" component={Input} validate={[required]} type="email" placeholder="Email"/>
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


const Login = (props) => {


    let onSubmit = (formData) => {

        console.log(props);

        //props.loginUserThunk(formData.email, formData.password, formData.rememberMe);
    };

    let onChange = (e) => {
        //console.log(e);
    };

    return (
    <div className="app-content">
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} onChange={onChange} />
    </div>
    )
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);

const mapStateToProps = (state) => ({

});

export default connect(null, loginUserThunk)(Login);