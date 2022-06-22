import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import Pokemons from "./Pokemons";
import { fetchPokemons } from "../../actions/actions";


describe('Pokemons',()=>{
    let list ; 
    beforeEach(async()=>{
        const fetch=await fetchPokemons()
            .then(res=> {
                list = res.data})
            .catch(err=> console.log(err))
    })
    test ('renders content',()=>{
        const view = render(<Pokemons list={list} />);
        expect(view.container).toHaveTextContent('Charizard')
    })

})