import React from "react";
import { addPokemon } from "../../actions/actions";
import './Create.css'

const Create = ({cancel, onSubmit}) =>{
    const [state, setState] = React.useState({
        name:"",
        image:"",
        attack:"",
        defense:"",
        hp:"10",
        type:"--",
        idAuthor:1
    })
    const handleChange = (e) =>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(state.name && state.image && state.attack && state.defense){
            if(onSubmit) onSubmit(state)
            addPokemon(state)
        } else {
            if(onSubmit) onSubmit({alert:true})
            alert("Completar todos los campos")}
    }
    return (
        <div className="create-container" >
            <h4>Nuevo Pokemon</h4>
            <form
                onSubmit={handleSubmit}
                >
            <div className="row-form" >
                <div className="column-form" >
                    <div>
                        <label>Nombre:</label>
                        <input
                            name="name" title="name" className="" type="text" value={state.name} onChange={(e)=>handleChange(e)} ></input>
                    </div>
                    <div>
                        <label>Imagen:</label>
                        <input
                            name="image" title="image" className="" type="text" value={state.image} onChange={(e)=>handleChange(e)} ></input>
                    </div>

                </div>
                <div className="column-form" >
                    <div  >
                        <label>Ataque: </label>
                        <label>0</label>
                        <input name="attack" title="slider-attack" className="slider-input" type="range" min="0" max="100" step="5" value={state.attack} onChange={(e)=>handleChange(e)} ></input>
                        <label>100</label>
                    </div>
                    <div  >
                        <label>Defensa: </label>
                        <label>0</label>
                        <input name="defense" title="slider-defense" className="slider-input" type="range" min="0" max="100"  step="5" value={state.defense} onChange={(e)=>handleChange(e)} ></input>
                        <label>100</label>
                    </div>

                </div>
            </div>
            <div className="buttons-container" >
                <button className="submit button-form " type="submit"  >Guardar</button>
                <button className="cancel button-form " type="reset" onClick={()=>cancel()} >Cancelar</button>
                
            </div>
            </form>
        </div>
    )
}

export default Create