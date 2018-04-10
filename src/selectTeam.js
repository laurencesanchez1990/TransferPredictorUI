import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import axios from 'axios';
import DropDown from 'react-dropdown';

class SelectTeam extends Component {
    constructor(props) {
		super(props);
		this.state = {
			loading: '',
			players: []
		}
	}

    componentDidMount() {
        axios.get("http://localhost:3001/api/playerDataWeek8")
        .then((response) => {
          const players = response.data.elements
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

    render () {
        console.info(this.state)
        var names = this.state.players.map((player) => {
            return {value: player.id, label: player.first_name + " " + player.second_name}
        }) 
        return (
            <div>
                <DropDown options={names} />
            </div>
        )
    }
}

export default SelectTeam;