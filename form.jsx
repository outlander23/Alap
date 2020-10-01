import React,{Component} from 'react';
import Input from "./input";

class Form extends Component{
	state ={
	
	data: {email:"",username :"",password:""},
	errors:{}
	
	};
	
	validate=()=>{
	const errors={};
	if (this.state.data.username.trim()==='')
	 errors.username="username is required"
	if (this.state.data.password.trim()==='')
	 errors.password="password is required"
	return Object.keys(errors).length ===0 ? null:errors;
	};
	
	validateChange = event =>{
	let emailvalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (event.name === "email"){
		     if (emailvalid.test(event.value) === false) return "Email-address is not valid";
		    }
	
		if (event.name === "username"){
			 if (event.value.trim()==="") return "Username is required";
			 if (event.value.length<=3) return "Username is should be gater than 3 letter.";
			}
			
		if (event.name === "password"){
			 if (event.value.trim()==="") return "Password is required";
			 if (event.value.length<=8) return "Password must be gater than 8 charecter";
			}
	};
	
	
	handleChange=({currentTarget:event}) =>{
		const errors={...this.state.errors};
		const errorMassage=this.validateChange(event);
		if (errorMassage) errors[event.name]=errorMassage;
		else delete errors[event.name];
		const data={...this.state.data};
		data[event.name] =event.value;
		this.setState({data,errors});
	};
	
	handlesubmit= event=>{
	event.preventDefault();
	const errors=this.validate();
	this.setState({errors:errors || {}});
	if (errors) return;
	
	
	};
	
	renderButton(label){
	return (<button  
	disabled={this.validate()} 
	className="btn btn-primary 
	">
	{label}
	</button>);
	};
	
	renderInput(name,label,type){
	
	const{data,errors}=this.state;
	
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
