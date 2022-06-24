import * as React from 'react'
import EditModal from '../EditModal/EditModal'
import DeleteModal from '../DeleteModal/DeleteModal'

const PokemonLine = ({details, updateList})=>{
    return(
        <tr>
            <td className='cell-big' >{details.name}</td>
            <td className='image-button' >
                <a href={details.image} target="_blank">
                    <button className="boton-table" >
                        <img src="https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_960_720.png" alt="download img" width="30px">
                        </img>

                    </button>
                </a>
            </td>
            <td className='cell-small' >{details.attack}</td>
            <td className='cell-small' >{details.defense}</td>
            <td className='cell-big' >                
            <EditModal props={details} updateList={updateList} />
            <DeleteModal id={details.id} name={details.name} updateList={updateList} />
            </td>
        </tr>
        
    )
}

export default PokemonLine