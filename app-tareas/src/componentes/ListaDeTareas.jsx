import React,{useState} from 'react'
import TareaFormulario from './TareaFormulario'
import '../estilos/ListaDeTareas.css'

function ListaDeTareas() {
    const [tarea,setTareas] = useState([])
 
        return (
    <>
        <TareaFormulario></TareaFormulario>
        <div className='tareas-lista-contenedor'>

        </div>
    </>
  )
}

export default ListaDeTareas