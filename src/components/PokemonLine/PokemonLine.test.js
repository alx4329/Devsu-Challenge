import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { cleanup, render, screen } from "@testing-library/react";
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

xdescribe('Pokemon Line',()=>{
    let list ; 
    beforeEach(async()=>{
        const fetch=await fetchPokemons()
            .then(res=> {
                list = res.data                
            })
            .catch(err=> console.log(err))
        })
    test ('renders pokemon name',()=>{
        const tableBody = document.createElement('tbody');
        let {container} = render(<PokemonLine details={testPokemon} />,{
            container: document.body.appendChild(tableBody)
        });
        expect(container).toHaveTextContent(testPokemon.name)
    })
    test ('renders pokemon attack',()=>{
        const tableBody = document.createElement('tbody');
        let {container} = render(<PokemonLine details={testPokemon} />,{
            container: document.body.appendChild(tableBody)
        });
        expect(container).toHaveTextContent(testPokemon.attack)
    })
    test ('renders pokemon defense',()=>{
        const tableBody = document.createElement('tbody');
        let {container} = render(<PokemonLine details={testPokemon} />,{
            container: document.body.appendChild(tableBody)
        });
        expect(container).toHaveTextContent(testPokemon.defense)
    })

})