import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, screen} from "@testing-library/react";
import Pokemons from "./Pokemons";
import { fetchPokemons } from "../../actions/actions";


xdescribe('Pokemons',()=>{
    let list ; 
    beforeEach(async()=>{
        const fetch=await fetchPokemons()
            .then(res=> {
                list = res.data})
            .catch(err=> console.log(err))
    })
    test ('renders content',()=>{
        render(<Pokemons list={list} />);
        screen.getByRole('cell', {
            name: /charizard1/i
          })
    })

})