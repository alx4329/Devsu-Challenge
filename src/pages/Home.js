import React from 'react'
import Pokemons from '../components/Pokemons/Pokemons'
import SearchBar from '../components/SearchBar/SearchBar'
import { fetchPokemons } from '../actions/actions'
import Create from '../components/Create/Create'

const Home = ()=>{
    const [pokemonsList, setPokemonsList] = React.useState([])
    const [filteredPokemons, setFilteredPokemons] = React.useState([])
    const [showCreate, setShowCreate] = React.useState(false)
    React.useEffect(()=>{
        loadPokemons()
    },[])
    //next=> make this a custom Hook
    const loadPokemons = ()=>{
        fetchPokemons()
            .then(res=>{
                setPokemonsList(res.data)
                setFilteredPokemons(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }



    return(
        <div>
            <h3>Listado de Pokemon</h3>
            <SearchBar pokemons={pokemonsList} setPokemons={setFilteredPokemons} />
            <button onClick={()=>setShowCreate(!showCreate)} >Nuevo</button>
            <Pokemons list={filteredPokemons} />
            {
                showCreate && <Create/>
            }
        </div>
    )
}

export default Home