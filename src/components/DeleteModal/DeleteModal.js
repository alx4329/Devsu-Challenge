import React from "react";
import { deletePokemon } from "../../actions/actions";

const DeleteModal = ({id, name, updateList}) =>{
    const [showModal, setShowModal]= React.useState(false)
    const handleShow= ()=>{
        setShowModal(!showModal)
    }
    const ejectDelete = async (id)=>{
        await deletePokemon(id)
        updateList()
        setShowModal(!showModal)
    }
    return(
        <>
            <button onClick={handleShow} className="boton-table" >
                <span className="material-symbols-outlined" style={{color:"purple"}} >delete</span>
            </button>
            {
                showModal&&<div id="myModal" className="modal">
                
                <div className="modal-content">
                    <span onClick={handleShow} className="close">&times;</span>
                    <p>¿Esta seguro que desea eliminar {name}?</p>
                    <button onClick={()=>ejectDelete(id)} >Confirmar</button>
                    <button onClick={handleShow} >Cancelar</button>
                </div>

                </div>

            }
        </>
    )
}

export default DeleteModal