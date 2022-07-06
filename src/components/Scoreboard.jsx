// src/components/Scoreboard.js
import { useState } from 'react'
import Player from "./Player";
import Form from './Form';

export default function Scoreboard() {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Karla', score: 10 },
    { id: 2, name: 'Matias', score: 12 },
    { id: 3, name: 'Swen', score: 1 },
    { id: 4, name: 'Maria', score: 8 },
  ]);

  const increaseScore = (playerId) => {
    const updatedPlayers = players.map(p => {

      if (p.id === playerId) {
        return { ...p, score: p.score + 1 }
      } else {
        return p;
      }
    })

    setPlayers(updatedPlayers);
  }

  const addPlayer = (name) => {
    //1. Define a new player
    const newPlayer = { id: players.length + 1, name: name, score: 0}
    //2. Add the new player to the array
    const newPlayersArray = [ ...players, newPlayer]
    //3. Add the new array to the state
    setPlayers(newPlayersArray)
  }

  return (
    <div className="Scoreboard">
      <Form addPlayer={addPlayer} />
      <p>Player's scores:</p>
      <ul>
        {players.map(p => 
          <Player 
            key={p.id}
            name={p.name}
            id={p.id}
            score={p.score}
            increaseScore={increaseScore} 
          />)}
      </ul>
    </div>
  );
}

