import * as React from 'react'


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
                    list.map((item)=>{
                        return <tr>
                                    <td>{item.name}</td>
                                    <td>
                                        <button>
                                            <img src="https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_960_720.png" alt="download img" width="30px"></img>
                                        </button>
                                    </td>
                                    <td>{item.attack}</td>
                                    <td>{item.defense}</td>
                                    <td>
                                        
                                            <button>Editar</button>
                                            <button>Borrar</button>

                                        
                                    </td>
                                </tr>
                    })
                }
                    
                </tbody>

            </table>
        </div>
        
    )
}

export default Pokemons