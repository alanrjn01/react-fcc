import './App.css';
import Testimonio from './componentes/Testimonio';
import personajes from './datos/personajes';
function App() {
  return (
    <div className="App">
      <div>
        <h1>Presentación</h1>
          {personajes.map(personaje => 
            <Testimonio
            nombre={personaje.nombre}
            pais={personaje.pais}
            imagen={personaje.imagen}
            cargo={personaje.cargo}
            empresa={personaje.empresa}
            testimonio={personaje.testimonio}
            key={personaje.nombre}/>)}
      </div>
    </div>
  );
}

export default App;
