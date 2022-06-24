import * as React from 'react'
import PokemonLine from '../PokemonLine/PokemonLine'

const Pokemons = ({list, updateList}) => {
    return (
        <div>
            <table border="1" >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Ataque</th>
                        <th>Defensa</th>
                        <th>Acciones</th>
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