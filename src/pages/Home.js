import React from 'react'
import Pokemons from '../components/Pokemons/Pokemons'
import SearchBar from '../components/SearchBar/SearchBar'
import { fetchPokemons } from '../actions/actions'
import Create from '../components/Create/Create'
import './Home.css'
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
        <div className='home-container' >
            <h4>Listado de Pokemon</h4>
            <div className='bar-container' >
                <SearchBar pokemons={pokemonsList} setPokemons={setFilteredPokemons} />
                <button onClick={()=>setShowCreate(!showCreate)} className="button-new">
                    <span className="material-symbols-outlined">add</span>
                    Nuevo
                </button>

            </div>
            <Pokemons list={filteredPokemons} updateList={loadPokemons}/>
            {
                showCreate && <Create cancel={setShowCreate} />
            }
        </div>
    )
}

export default Home