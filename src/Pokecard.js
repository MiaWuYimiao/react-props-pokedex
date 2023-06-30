import './Pokecard.css'

function Pokecard({id, name, type, base_experience, img_url}) {
    return (
        <div className="Pokecard">
            <h4 className="Pokecard-name">{name}</h4>
            <img className="Pokecard-img" src={img_url} alt={name} />
            <p className="Pokecard-type">Type: {type}</p>
            <p className="Pokecard-exp">EXP: {base_experience}</p>
        </div>
    )
}

export default Pokecard;