import { first151Pokemon, getFullPokeManiaNumber } from "../utils"

import { useState } from 'react'

export default function SideNav(props) {

    const { selectedPokemon, setSelectedPokemon } = props

    const [searchValue, setSearchValue] = useState('')

    const filteredPokemon = first151Pokemon.filter((ele, eleIndex) => {
        // if full pokedex number includes the current search value, return true
        if ((getFullPokeManiaNumber(eleIndex)).includes(searchValue)) { return true }

        // if the pokemon name includes the current search value, return true
        if (ele.toLowerCase().includes(searchValue.toLowerCase())) { return true }

        // otherwise, exclude value from the array
        return false
    })

    return (
        <nav>
            <div className="header">
                <button className="open-nav-button">
                    <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                <h1 className="text-gradient">PokeMania</h1>
            </div>
            <input placeholder="E.g. 001 or Bulba..." value={searchValue} onChange={(e) => {
                setSearchValue(e.target.value)
            }} />
            {filteredPokemon.map((pokemon, pokemonIndex) => {
                const truePokeManiaNumber = first151Pokemon.indexOf(pokemon)
                return (
                    <button
                        onClick={() => {
                            setSelectedPokemon(truePokeManiaNumber)
                        }}
                        key={pokemonIndex} className={'nav-card ' + (pokemonIndex === selectedPokemon ? ' nav-card-selected' : ' ')}>
                        <p>{getFullPokeManiaNumber(truePokeManiaNumber)}</p>
                        <p>{pokemon}</p>
                    </button>
                )
            })}
        </nav>
    )
}