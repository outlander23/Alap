import React, {Component} from 'react';
import Input from "./input";

class Form extends Component {
    // Structure of validate function is bad
    // What happens if wan't to validate e field
    // named "title". For this you have to edit this class.
    // which will increase the possibility of mistake
    // See my git Form to understand how to implement this
    validate = () => {
        const errors = {};
        if (this.state.data.username.trim() === '')
            errors.username = "username is required"
        if (this.state.data.password.trim() === '')
            errors.password = "password is required"
        return Object.keys(errors).length === 0 ? null : errors;
    };
    // Too many useless use of "event" variable. Use Object Destructuring
    // See ES6 refresher(React-Mosh video) to know about Obj. Dest..
    // Structure is bad as validate function
    validateChange = ({name, value}) => {
        // removed / from      here          here
        let emailvalid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (name === "email") {
            if (emailvalid.test(value) === false) return "Email-address is not valid";
        }

        if (name === "username") {
            if (value.trim() === "") return "Username is required";
            if (value.length <= 3) return "Username is should be gater than 3 letter.";
        }

        if (name === "password") {
            if (value.trim() === "") return "Password is required";
            if (value.length <= 8) return "Password must be gater than 8 charecter";
        }
    };


    handleChange = ({currentTarget: event}) => {
        const errors = {...this.state.errors};
        const errorMassage = this.validateChange(event);
        if (errorMassage) errors[event.name] = errorMassage;
        else delete errors[event.name];
        const data = {...this.state.data};
        data[event.name] = event.value;
        this.setState({data, errors});
    };

    // name should be in CamelCase
    handleSubmit = event => {
        event.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;


    };

    renderButton(label) {
        return (<button
            disabled={this.validate()}
            className="btn btn-primary
	">
            {label}
        </button>);
    };

    renderInput(name, label, type) {
        const {data, errors} = this.state;
        return (
            <Input
                placeholder={label}
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
                type={type}
                error={errors[name]}
            />
        );
    }

}

export default Form;
