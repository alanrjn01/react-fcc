import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import sonidosArray from './sonidos/sonidos';
import gato from './imagenes/gato.jpeg'
import { useState } from 'react';

function App() {
  
  //usando hooks: useState para los valores del contador
  const [numClics,setNumClics] = useState(0)
  const [temporizadorActivado,setTemporizadorActivado] = useState(false)

  const manejarClic = () => {
    if(numClics===0){
      setTemporizadorActivado(true)
      setNumClics(numClics+1)
      return null
    }
    setNumClics(numClics+1)
  }

  const reiniciarContador = () => {
    setNumClics(0)
  }

  const clickGato = () =>{
    sonidosArray[Math.floor(Math.random()*16)].play()
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo' src={gato} alt='logo' onClick={clickGato}/>
      </div>
      <div className='contenedor-principal'>
        <Contador clics={numClics}></Contador>
        <Boton texto='Clic' manejarClic={manejarClic}></Boton>
        <Boton texto='Reiniciar' manejarClic={reiniciarContador}></Boton>
      </div>
    </div>
  );
}

export default App;
