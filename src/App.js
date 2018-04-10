import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import axios from 'axios';
import Home from './Home';
import Login from './Login';
import SignIn from './signIn';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Cookies from 'cookies-js';
import SelectTeam from './selectTeam.js'




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: !! Cookies.get('transferPredictorLogin')
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this)
  }

  onLoginSuccess(email, history) {
    console.info(email) 
    this.setState({ isLoggedIn: true })
    history.push('/');
    Cookies.set('transferPredictorLogin', email);
  }

  render() {
    return (
      <div className="App">
        <Router
        >
          <div>
            <Route exact path="/" render={(routeProps => (
              this.state.isLoggedIn ? <Home {...routeProps} /> : <Redirect to={{ pathname: "/signin" }} />
            ))} />
             <Route exact path="/selectTeam" render={(routeProps => (
              this.state.isLoggedIn ? <SelectTeam {...routeProps} /> : <Redirect to={{ pathname: "/signin" }} />
            ))} />
            <Route exact path="/signin" render={(routeProps) => (
              <SignIn {...routeProps} onLoginSuccess={ (email) => { this.onLoginSuccess(email, routeProps.history)} }/>
            )} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
