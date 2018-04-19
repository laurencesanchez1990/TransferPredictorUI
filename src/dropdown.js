import React from 'react'

export default ({players}) => {
    return <select className="player-dropdown">
        <option value="0">Please select</option>
        { players.map((player) => {
            return <option value={player.value}>{player.label}</option>
        })}
    </select>
}