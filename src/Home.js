import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import axios from 'axios';
import Players from './players';
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    console.info(props)
  }

  componentDidMount() {
    const self = this;
    if (this.props.selectedPlayers) {
      var payload = {
        "players": JSON.stringify(this.props.selectedPlayers),
      }
      console.info('do a post here instead');
      axios.post("http://localhost:3001/api/recommendations", payload).then(function (response) {
        const players = response.data.data
        self.setState({
          loading: false,
          players
        })
        console.log(response)
      })
      .catch((error) => {
        console.info(error)
      });  
      
    } else {

      axios.get("http://localhost:3001/api/recommendations")
        .then((response) => {
          const players = response.data.data
          self.setState({
            loading: false,
            players
          })
          console.log(response)
        })
        .catch((error) => {
          console.info(error)
        });
    }
  }

  render() {
    return (
      <div className="Home">
        {this.state.loading ? <span>Loading</span> : <Players players={this.state.players} />}
      </div>
    );
  }
}

export default Home;
