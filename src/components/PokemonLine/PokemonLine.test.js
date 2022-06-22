import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import { fetchPokemons } from "../../actions/actions";
import PokemonLine from "./PokemonLine";
const testPokemon= {
    name: "Bullbasaur",
    attack:45,
    defense:67,
    id:"asd123",
    hp: 57,
    type: "normal",
    id_author: 1,
    image:"https://archives.bulbagarden.net/media/upload/thumb/5/5b/Ash_Bulbasaur_debut.png/220px-Ash_Bulbasaur_debut.png"
}

describe('Pokemon Line',()=>{
    let list ; 
    beforeEach(async()=>{
        const fetch=await fetchPokemons()
            .then(res=> {
                list = res.data})
            .catch(err=> console.log(err))
    })
    test ('renders content',()=>{
        const tableBody = document.createElement('tbody');
        const {container} = render(<PokemonLine details={testPokemon} />,{
            container: document.body.appendChild(tableBody)
        });
        expect(container).toHaveTextContent(testPokemon.name)
        expect(container).toHaveTextContent(testPokemon.attack)
        expect(container).toHaveTextContent(testPokemon.defense)
    })

})