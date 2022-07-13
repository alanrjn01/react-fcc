import React from 'react'
import '../estilos/Boton.css'

function Boton(props) {
  
  //PROPS.CHILDREN sirve para obtener el html de un elemento

  //comprueba si el valor no es un numero y tampoco un punto y un igual
  const esOperador = (valor) =>{
      return isNaN(valor) && (valor!= '.') && (valor != '=')
  }

  //se le asigna la clase dinámicamente 
  return (
    <div onClick={() => props.manejarClic(props.children)} className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>
        {props.children}
    </div>
  )
}

export default Boton