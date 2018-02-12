import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Players from './players';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/recommendations")
    .then((response) => {
      const players = response.data.data
      this.setState({
        loading: false,
        players
      })
      console.log(response)
    })
    .catch((error) => {
      console.info(error)
    });
  }

  render() {
    return (
      <div className="App">
        { this.state.loading ? <span>Loading</span> : <Players players={this.state.players} /> }
      </div>
    );
  }
}

export default App;
