import React from 'react'
import '../estilos/contador.css'

function Contador({clics}) {
  return (
    <div className='contador'>
        {clics}
    </div>
  )
}

export default Contador