import React,{useState,useEffect} from 'react'
import TareaFormulario from './TareaFormulario'
import Tarea from './Tarea'
import '../estilos/ListaDeTareas.css'

function ListaDeTareas() {
    const [tareasLocalStorage,setTareasLocalStorage] = useState([])
    
    const agregarTarea = (tarea) => {
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim()
            const tareasActualizadas = [tarea,...JSON.parse(localStorage.getItem('tareas'))]
            setTareasLocalStorage(tareasActualizadas)
            localStorage.setItem('tareas',JSON.stringify(tareasActualizadas))
        }
        
    }

    const eliminarTarea = (id) => {
        const tareasActualizadas = tareasLocalStorage.filter(tarea => tarea.id !==id)
        localStorage.setItem('tareas',JSON.stringify(tareasActualizadas))
        setTareasLocalStorage(tareasActualizadas)
    }

    const completarTarea = (id) => {
        const tareasActualizadas = tareasLocalStorage.map(tarea =>{
            if(tarea.id === id){
                tarea.completada = !tarea.completada
            }
            return tarea
        })
        localStorage.setItem('tareas',JSON.stringify(tareasActualizadas))
        setTareasLocalStorage(tareasActualizadas)
    }

    //utilizo useEffect para actualizar el estado de la página obteniendo del localstorage el array de tareas
    //y setteandolo en TareasLocalStorage
     useEffect(()=>{
        setTareasLocalStorage(JSON.parse(localStorage.getItem('tareas')))
     },[])

        return (
        <>
            <TareaFormulario onSubmit={agregarTarea}/>
            <div className='tareas-lista-contenedor'>
                {tareasLocalStorage.map((tarea)=>(
                    <Tarea key={tarea.id} id={tarea.id} texto={tarea.texto} completada={tarea.completada} completarTarea={completarTarea} eliminarTarea={eliminarTarea}/>
                ))}
            </div>
        </>
  )
}

export default ListaDeTareas