import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}
	handleClick(event) {
		var apiBaseUrl = "http://localhost:3001/api/";
		var self = this;
		var payload = {
			"email": this.state.email,
			"password": this.state.password
		}
		axios.post(apiBaseUrl + 'login', payload).then(function (response) {
			console.log(response);
				console.log("Login Successful");
				self.props.onLoginSuccess(self.state.email)
		})
			.catch(function (error) {
				console.log(error);
			});
	}


	render() {
		return (
			<div>
				<MuiThemeProvider>
					<div>
						<AppBar
							title="Login"
						/>
						<TextField
							hintText="Enter Email"
							floatingLabelText="Email"
							onChange={(event, newValue) => this.setState({ email: newValue })}
						/>
						<TextField
							hintText="Enter Password"
							floatingLabelText="Password"
							onChange={(event, newValue) => this.setState({ password: newValue })}
						/>
						<br />
						<RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
					</div>
				</MuiThemeProvider>
			</div>
		);
	}

}
const style = {
	margin: 15,
};
export default Login;


