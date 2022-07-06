// src/components/Player.js
export default function Player(props) {

  const onAddClick = () => {
    props.increaseScore(props.id)
  }

  return (
    <li className="Player" style={{ display: 'flex', alignItems: 'center '}}>

      <p style={{ marginRight: 30 }}>{props.name}</p>

      <button
        style={{ height: 30, marginRight: 30 }}
        onClick={onAddClick}>
        +
      </button>
      <h3>{props.score}</h3>
    </li>
  );
}