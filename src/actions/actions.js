import { get_pokemons_url, update_pokemon } from "../utils/urls";
import axios from "axios"

export const fetchPokemons = async () =>{
    return axios.get(get_pokemons_url)
}

export const addPokemon = async(data)=>{
    return axios.post(get_pokemons_url,data)
}

export const editPokemon = async({data, id})=>{
    
    const url = update_pokemon + id
    console.log(url)
    return axios.put(url, data)
}

export const deletePokemon = async(data)=>{
    const url = update_pokemon + data.id

    console.log(url)
    console.log("deletinnn")
    // return axios.delete(update_pokemon, )
}