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

  return (
    <div className="Scoreboard">
      <p>Player's scores:</p>
      <ul>
        {players.map(p => 
          <Player 
            name={p.name}
            id={p.id}
            score={p.score}
            increaseScore={increaseScore} 
          />)}
      </ul>
    </div>
  );
}

