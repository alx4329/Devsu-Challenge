import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { waitFor, render, screen} from "@testing-library/react";
import Home from "./Home";
import { act } from "react-dom/test-utils";


xtest ('render pokemons',async ()=>{
    render(<Home />)
    await waitFor(()=>{
        screen.getByText(/bulbasaur/i)
    })
})
