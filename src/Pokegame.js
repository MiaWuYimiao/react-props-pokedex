import Pokedex from './Pokedex';
import pokeItems from './pokeItems';

function Pokegame() {
    let pokeItems1 = [];
    let pokeItems2 = pokeItems.map((i) => i);
    console.log(`pokeItems ${pokeItems}`);

    while(pokeItems1.length < pokeItems2.length) {
        let randIdx = Math.floor(Math.random() * pokeItems2.length);
        let randomItem = pokeItems2.splice(randIdx, 1)[0];
        pokeItems1.push(randomItem);
    }

    console.log(`pokeItems1 ${pokeItems1}`);
    console.log(`pokeItems2 ${pokeItems2}`);
  

    let exp1 = pokeItems1.reduce((acc, i) => (acc + i.base_experience), 0);
    let exp2 = pokeItems2.reduce((acc, i) => (acc + i.base_experience), 0);

    return (
        <div className="Pokegame">
            <Pokedex items={pokeItems1} exp={exp1} isWinner={exp1>exp2} />
            <Pokedex items={pokeItems2} exp={exp2} isWinner={exp2>exp1} />
        </div>
    );
}

export default Pokegame;