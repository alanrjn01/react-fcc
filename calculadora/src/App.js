import Boton from './componentes/Boton';
import './estilos/App.css';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import {useState} from 'react'
import {evaluate} from 'mathjs'

function App() {

  const [input,setInput] = useState('')

  const agregarInput = val =>{
    setInput(input + val)
  }

  //uso librería mathjs para pasar el string de la cuenta y calcularla
  const calcularResultado = () =>{
    if(input){
      setInput(evaluate(input))
    }
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img src={require('./imagenes/gato.jpeg')} className='logo' alt='el gato'></img>
      </div>
      <div className='contenedor-calculadora'>
          <Pantalla input={input}></Pantalla>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'>
        <BotonClear manejarClear={()=> setInput('')}>Limpiar</BotonClear>
        </div>
      </div>
    </div>
    
  );
}

export default App;
