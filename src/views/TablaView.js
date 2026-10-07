function TablaView({ alumnos }) {
  return (
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
  );
}

export default TablaView;