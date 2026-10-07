import './App.css';

function App() {
  const alumnos = [
    { id: 1, nombre: 'Luis', carrera: 'Sistemas', promedio: 9.5 },
    { id: 2, nombre: 'gordito', carrera: 'de los putos', promedio: 9.0 },
    { id: 3, nombre: 'negro', carrera: 'Sistemas', promedio: 8.7 },
    { id: 4, nombre: 'cruz', carrera: 'sistemas ', promedio: 9.2 },
  ];

  return (
    <div className="contenedor">
      <h1>Primer Parcial</h1>

      <h2>Tabla</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Carrera</th>
            <th>Promedio</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.nombre}</td>
              <td>{a.carrera}</td>
              <td>{a.promedio}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Tarjetas</h2>
      <div className="tarjetas">
        {alumnos.map((a) => (
          <div className="tarjeta" key={a.id}>
            <h3>{a.nombre}</h3>
            <p>{a.carrera}</p>
            <p>Promedio: {a.promedio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;