import React,{Component} from 'react';
import Input from "./input";

class Login extends Component{

	state ={
	
	account: {email:"",username :"",password:""},
	errors:{}
	
	};

	
	
	validate=()=>{
	const errors={};
	if (this.state.account.username.trim()==='')
	 errors.username="username is required"
	if (this.state.account.password.trim()==='')
	 errors.password="password is required"
	return Object.keys(errors).length ===0 ? null:errors;
	};
	
	
	
	validateChange = event =>{
	let emailvalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (event.currentTarget.name === "email"){
		     if (emailvalid.test(event.currentTarget.value) === false) return "Email-address is not valid";
		    }
	
		if (event.currentTarget.name === "username"){
			 if (event.currentTarget.value.trim()==="") return "Username is required";
			 if (event.currentTarget.value.length<=3) return "Username is should be gater than 3 letter.";
			}
			
		if (event.currentTarget.name === "password"){
			 if (event.currentTarget.value.trim()==="") return "Password is required";
			 if (event.currentTarget.value.length<=8) return "Password must be gater than 8 charecter";
			}
	};
	
	
	
	
	handleChange= event=>{
		const errors={...this.state.errors};
		const errorMassage=this.validateChange(event);
		if (errorMassage) errors[event.currentTarget.name]=errorMassage;
		else delete errors[event.currentTarget.name];
		const account={...this.state.account};
		account[event.currentTarget.name] =event.currentTarget.value;
		this.setState({account,errors});
	};
	
	
	
	
	
	handlesubmit= event=>{
	event.preventDefault();
	const errors=this.validate();
	this.setState({errors:errors || {}});
	if (errors) return;
	
	
	};
	
	
	
	
	render(){
	
	return (
	<div className="container">
	
	
	<h2>Login</h2>
	
	<form onSubmit={this.handlesubmit}>
	<Input 
	placeholder="Email"
	name="email"
	value={this.state.account.email}
	label="Email"
	onChange={this.handleChange}
	type="text"
	error={this.state.errors.email}
	/>
	
	<Input 
	placeholder="username"
	name="username"
	value={this.state.account.username}
	label="Username"
	onChange={this.handleChange}
	type="text"
	error={this.state.errors.username}
	/>
	
	<Input 
	placeholder="password"
	name="password"
	value={this.state.account.password}
	label="password"
	onChange={this.handleChange}
	type="password"
	error={this.state.errors.password}
	/>
	
	
	
	<button  
	disabled={this.validate()} 
	className="btn btn-primary 
	">
	login
	</button>
	</form>

	</div>
	);
	
	
	 
		
	}
}
export default Login;
