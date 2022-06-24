import * as React from 'react'
import PokemonLine from '../PokemonLine/PokemonLine'
import './Pokemons.css'
const Pokemons = ({list, updateList}) => {
    return (
        <div>
            <table border="1" cellSpacing="0" cellPadding="2" >
                <thead>
                    <tr>
                        <th className='cell-big' >Nombre</th>
                        <th className='cell-small' >Imagen</th>
                        <th className='cell-small' >Ataque</th>
                        <th className='cell-small' >Defensa</th>
                        <th className='cell-big'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item)=>{
                            return <PokemonLine 
                                    key={item.id} 
                                    details={item}
                                    updateList={updateList}
                                     />
                                    })
                    }
                </tbody>
                    
                

            </table>
        </div>
        
    )
}

export default Pokemons