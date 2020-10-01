import React from 'react';

import Form from "./form";


class Login extends Form {
    // Use State here. Because you don't
    // Want to edit Form to reduce mistake.
    // Every editing may lead to a bug
    state = {
        data: {email: "", username: "", password: ""},
        errors: {}
    };
    // Use indention Like python
    // Without indention it is hard to read
    render() {
        return (
            <div className="container">
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("email", "Email", "text")}
                    {this.renderInput("username", "Username", "text")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("login")}
                </form>
            </div>
        );
    }
}

export default Login;
