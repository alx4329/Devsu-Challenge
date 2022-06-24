import * as React from 'react'
import EditModal from '../EditModal/EditModal'
const PokemonLine = ({details, updateList})=>{
    return(
        <tr>
            <td>{details.name}</td>
            <td>
                <button>
                    <img src="https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_960_720.png" alt="download img" width="30px"></img>
                </button>
            </td>
            <td>{details.attack}</td>
            <td>{details.defense}</td>
            <td>                
            <EditModal props={details} updateList={updateList} />
            <button>Borrar</button>                
            </td>
        </tr>
        
    )
}

export default PokemonLine