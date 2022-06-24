import React from "react";
import "./SearchBar.css"
const SearchBar = ({pokemons, setPokemons }) =>{
    const [searchPokemon, setSearchPokemon] = React.useState('')
    const handleChange = (e)=>{
        setSearchPokemon(e.target.value)
        let filteredPokemons = pokemons.filter((poke)=>{
            return poke.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setPokemons(filteredPokemons)
    }
    return(
        <div className="search-container" >
            <span className="material-symbols-outlined search-icon">search</span>
            <input
                id="search-input"
                value={searchPokemon}
                onChange={(e)=>handleChange(e)}
                placeholder="Buscar"
            >
            </input>
        </div>
    )
}

export default SearchBar