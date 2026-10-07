import './App.css';
import { obtenerAlumnos, promedioGeneral } from './controllers/alumnosController';
import TablaView from './views/TablaView';
import TarjetasView from './views/TarjetasView';

function App() {
  const alumnos = obtenerAlumnos();

  return (
    <div className="contenedor">
      <h1>Primer Parcial</h1>
      <p style={{ textAlign: 'center' }}>
        Promedio general: {promedioGeneral()}
      </p>

      <h2>Tabla</h2>
      <TablaView alumnos={alumnos} />

      <h2>Tarjetas</h2>
      <TarjetasView alumnos={alumnos} />
    </div>
  );
}

export default App;