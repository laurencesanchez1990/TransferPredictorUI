import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';

class Register extends Component{
	constructor(props){
		super(props);
		this.state ={
			first_name:'',
			last_name:'',
			email:'',
			password:''
		}
	}
	render(){
		return (
			<div>
			<AppBar title="Register"/>
			<TextField
				hintText="Enter First Name"
				floatingLabelText="First Name"
				onChange = {(event,newValue) => this.setState({first_name:newValue})}
			/>
			<br/>
			<TextField
				hintText="Enter Last Name"
				floatingLabelText="Last Name"
				onChange = {(event,newValue) => this.setState({last_name:newValue})}
			/>
			<br/>
			<TextField
				hintText="Enter Email Address"
				type="email"
				floatingLabelText="Email"
				onChange = {(event,newValue) => this.setState({email:newValue})}
			/>
			<br/>
			<TextField
				hintText="Enter Password"
				type="password"
				floatingLabelText="Password"
				onChange = {(event,newValue) => this.setState({password:newValue})}
			/>
			<br/>
			<RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
			<br/>
		</div>
		</MuiThemeProvider>
	</div>
	<br/>
	);
}
}

const style = {
	margin:15,
};

export default Register;

handleClick (event);{
	var apiBaseUrl = "http://localhost:4000/api/";
	console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
	//check for empty values before hitting submit
	var self = this;
	var payload={
		"first_name":this.state.first_name,
		"last_name":this.state.last_name,
		"email":this.state.email,
		"password":this.state.password
	}
	axios.post(apiBaseUrl+'/register', payload).then(function(response){
		console.log(response);
		if(response.data.code == 200){
			//console.log("registration successful");
			var loginscreen=[];
			loginscreen.push(<Login parentContext={this}/>)<br/>;
			var loginmessage = "Not Registered, Please Complete Registration";

			self.props.parentContext.setState({loginscreen:loginscreen,
				loginmessage:loginmessage,
				buttonLabel:"Register",
				isLogin:true
			});
		}
	})
	.catch(function(error){
		console.log(error)
	});
	}
}