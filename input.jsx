import React,{Component} from 'react';

const Input=({name,value,onChange,label,type,placeholder,error})=>{
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
	/>
	{error && <div className="alert alert-danger">{error}</div>}
	</div>
	);
}

export default Input;
