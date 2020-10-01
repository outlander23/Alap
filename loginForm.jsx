import React,{Component} from 'react';

import Form from "./form";



class Login extends Form{

	

	
	render(){
	
	return (
	<div className="container">
	
	
	<h2>Login</h2>
	
	<form onSubmit={this.handlesubmit}>
	
	{this.renderInput("email","Email","text")}
	{this.renderInput("username","Username","text")}
	{this.renderInput("password","Password","password")}
	{this.renderButton("login")}
	
	
	</form>

	</div>
	);
	
	
	 
		
	}
}
export default Login;
