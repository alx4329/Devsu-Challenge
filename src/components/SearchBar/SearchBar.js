import React from "react";

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
        <div>
            <input
                value={searchPokemon}
                onChange={(e)=>handleChange(e)}
                placeholder="Buscar"
            ></input>
        </div>
    )
}

export default SearchBar