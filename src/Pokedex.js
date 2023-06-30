import Pokecard from './Pokecard';
import './Pokedex.css'

function Pokedex({ items, exp, isWinner}) {
  let winMessage = null;
  if(isWinner) {
    winMessage = <p>THIS HAND WINS!</p>
  }
  return (
    <div className="Pokedex">
      <h2 className="Pokedex-header">Pokedex</h2>
      <div className="Pokedex-card">
        {items.map(i => <Pokecard 
          key={i.id}
          name={i.name}
          type={i.type}
          base_experience={i.base_experience}
          img_url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i.id}.png`}
        />)}
      </div>
      <h4>Total experience: {exp} </h4>
      {winMessage}
    </div>
  );
}

export default Pokedex;