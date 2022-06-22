import { get_pokemons_url } from "../utils/urls";
import axios from "axios"

export const fetchPokemons = async () =>{
    return axios.get(get_pokemons_url)
}