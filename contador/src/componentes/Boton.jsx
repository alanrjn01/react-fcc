import React from 'react'
import '../estilos/boton.css'

//usando desestructuración de las props para obtener texto
function Boton({texto,manejarClic,timer}) {
  return (
    <div>
      <button 
        className={texto==='Clic' ? 'boton-clic' : 'boton-reinicio'}
        onClick={manejarClic}>
        {texto}
    </button>
    </div>
    
    
  )
}

export default Boton