import * as React from 'react'
import PokemonLine from '../PokemonLine/PokemonLine'

const Pokemons = ({list}) => {
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
                        list?.map((item)=>{
                            return <PokemonLine 
                                    key={item.id} 
                                    details={item} />})
                    }
                </tbody>
                    
                

            </table>
        </div>
        
    )
}

export default Pokemons