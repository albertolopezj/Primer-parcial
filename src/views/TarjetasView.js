function TarjetasView({ alumnos }) {
  return (
    <div className="tarjetas">
      {alumnos.map((a) => (
        <div className="tarjeta" key={a.id}>
          <h3>{a.nombre}</h3>
          <p>{a.carrera}</p>
          <p>Promedio: {a.promedio}</p>
        </div>
      ))}
    </div>
  );
}

export default TarjetasView;