import React from "react";
import { editPokemon } from "../../actions/actions";
import './EditModal.css'

const EditModal = ({props, onSubmit, updateList})=>{
    const [showModal, setShowModal] = React.useState(false)
    const handleShow= ()=>{
        console.log("should show sth")
        setShowModal(!showModal)
    }

    const [state, setState] = React.useState({
        name:props.name || "",
        image:props.image || "" ,
        attack:props.attack || 0 ,
        defense:props.defense || 0 ,
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

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(state.name && state.image && state.attack && state.defense){
            if(onSubmit) onSubmit(state)
            //addPokemon(state)
            await editPokemon({data:state,id: props.id})
            updateList()
            setShowModal(!showModal)
        } else {
            if(onSubmit) onSubmit({alert:true})
            alert("Completar todos los campos")}
    }
    return(
        <>
        <button onClick={handleShow} >Editar</button>
        {
           showModal && <div id="myModal" className="modal">
                <div className="modal-content">
                    <span onClick={handleShow} className="close">&times;</span>
                    <form
                onSubmit={handleSubmit}
                >
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
            <div>
                <div className="container-attack" >
                    <label>Ataque: </label>
                    <label>0</label>
                    <input name="attack" title="slider-attack" className="slider-input" type="range" min="0" max="100" step="5" value={state.attack} onChange={(e)=>handleChange(e)} ></input>
                    <label>100</label>
                </div>
                <div className="container-defense" >
                    <label>Defensa: </label>
                    <label>0</label>
                    <input name="defense" title="slider-defense" className="slider-input" type="range" min="0" max="100"  step="5" value={state.defense} onChange={(e)=>handleChange(e)} ></input>
                    <label>100</label>
                </div>

            </div>
            <button className="submit" type="submit">Guardar</button>
            <button className="cancel" type="reset" onClick={handleShow} >Cancelar</button>
            </form>
                </div>

                </div>  
        }
        </>
    )
}

export default EditModal