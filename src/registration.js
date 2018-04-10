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
	handleClick (event) {
		var apiBaseUrl = "http://localhost:3001/api/";
		var self = this;
		var payload={
			"email": this.state.email,
			"password": this.state.password,
			"first_name": this.state.first_name,
			"last_name": this.state.last_name
			}
			axios.post(apiBaseUrl + 'registration', payload).then(function (response) {
				console.log(response);
					console.log("Registration Successful");
					self.props.onLoginSuccess()
			})
				.catch(function (error) {
					console.log(error);
		});
		}

	render(){
		return (
			<div>
			<MuiThemeProvider>
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
			
		);
	}
}

const style = {
	margin:15,
};





	export default Register;
