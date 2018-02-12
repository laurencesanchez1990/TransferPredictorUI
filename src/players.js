import React from "react";


const recommendations = (players) => {
	return (<ul>{players.map((player) => {
		return <li>{player.name}</li>})
		}</ul>)

}

const players = (players) => {
	return (<ul>{players.map((player) => {
		return <li>{player.name}<div>{recommendations(player.recommendations)}</div></li>})
		}</ul>)

}

export default (props) => {
	return (
		<div>{players(props.players)}</div>
	)
}


