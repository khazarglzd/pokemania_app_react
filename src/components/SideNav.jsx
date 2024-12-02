import { first151Pokemon, getFullPokeManiaNumber } from "../utils"


export default function SideNav() {

    return (
        <nav>
            <div className="header">
                <button className="open-nav-button">
                    <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                <h1 className="text-gradient">PokeMania</h1>
            </div>
            <input placeholder="E.g. 001 or Bulba..." />
            {first151Pokemon.map((pokemon, pokemonIndex) => {
                return (
                    <button key={pokemonIndex} className='nav-card' >
                        <p>{getFullPokeManiaNumber(pokemonIndex)}</p>
                        <p>{pokemon}</p>
                    </button>
                )
            })}
        </nav>
    )
}