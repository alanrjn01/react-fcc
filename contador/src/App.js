import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import gato from './imagenes/gato.jpeg'
import { useState } from 'react';

function App() {

  //usando hooks: useState para los valores del contador
  const [numClics,setNumClics] = useState(0)

  const manejarClic = () => {
    setNumClics(numClics+1)
  }

  const reiniciarContador = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo' src={gato} alt='logo '/>
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
