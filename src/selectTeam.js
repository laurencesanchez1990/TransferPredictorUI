import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import axios from 'axios';
import DropDown from 'react-dropdown';
import BetterDropDown from './dropdown';

class SelectTeam extends Component {
    constructor(props) {
		super(props);
		this.state = {
			loading: '',
			players: []
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event){
        var selectedTeam = []
        const test = document.getElementsByClassName('player-dropdown')
        console.info('start')
        for (var picked = 0; picked < test.length; picked++) {
            console.info(test[picked].value);
            selectedTeam.push(test[picked].value);
        }
        this.props.getRecommendations(selectedTeam)
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
        const Goalkeepers = []
        this.state.players.forEach((player) => {
            if (player.element_type === 1){
            Goalkeepers.push ({value: player.id, label: player.first_name + " " + player.second_name})
            }
        })  

        const Defenders = []
        this.state.players.forEach((player) => {
            if (player.element_type === 2){
            Defenders.push ({value: player.id, label: player.first_name + " " + player.second_name})
            }
        })
        
        const Midfielders = []
        this.state.players.forEach((player) => {
            if (player.element_type === 3){
            Midfielders.push ({value: player.id, label: player.first_name + " " + player.second_name})
            }
        }) 

        const Strikers = []
        this.state.players.forEach((player) => {
            if (player.element_type === 4){
            Strikers.push ({value: player.id, label: player.first_name + " " + player.second_name})
            }
        }) 
    
        return (
            <div>
                
                <MuiThemeProvider>
                <AppBar title="Select Team"/>
                <div>
                    <h4>Goalkeepers</h4>
                    <BetterDropDown players={Goalkeepers} />
                    <BetterDropDown players={Goalkeepers} />
                </div>
                <div>
                    <h4>Defenders</h4>
                    <BetterDropDown players={Defenders} />
                    <BetterDropDown players={Defenders} />
                    <BetterDropDown players={Defenders} />
                    <BetterDropDown players={Defenders} />
                    <BetterDropDown players={Defenders} />
                </div>
                <div>
                    <h4>Midfielders</h4>
                    <BetterDropDown players={Midfielders} />
                    <BetterDropDown players={Midfielders} />
                    <BetterDropDown players={Midfielders} />
                    <BetterDropDown players={Midfielders} />
                    <BetterDropDown players={Midfielders} />
                </div>
                <div>
                    <h4>Strikers</h4>
                    <BetterDropDown players={Strikers} />
                    <BetterDropDown players={Strikers} />
                    <BetterDropDown players={Strikers} />
                </div>
                <div>
                    <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                </div>
                </MuiThemeProvider>
            </div>
        )
    }
}
const style = {
	margin: 15,
};

export default SelectTeam;