import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import axios from 'axios';
import Home from './Home';
import Login from './Login';
import Register from './registration';
class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Register /><Login onLoginSuccess={this.props.onLoginSuccess} />
            </div>
        );
    }
}

export default App;
