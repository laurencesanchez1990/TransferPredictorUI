import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import axios from 'axios';
import Home from './Home';
import Login from './Login';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this)
  }

  onLoginSuccess(){
    this.setState({isLoggedIn: true})
  }

  render() {
    return (
      <div className="App">
        { this.state.isLoggedIn ? <Home /> : <Login onLoginSuccess={this.onLoginSuccess} /> }
      </div>
    );
  }
}

export default App;
