import React from 'react';

const Input = ({name, value, onChange, label, type, placeholder, error}) => {
    // Hard to read without indention
    return (
        <div className="form-group ">
            <label htmlFor={name}>{label}</label>
            <input
                autoFocus
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
                type={type}
                className="form-control"
                id={name}
                autoComplete="off" // Use this to stop suggestion which is boring
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;
