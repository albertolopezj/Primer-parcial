import alumnos from '../models/alumnos';

export const obtenerAlumnos = () => alumnos;

export const promedioGeneral = () => {
  const suma = alumnos.reduce((total, a) => total + a.promedio, 0);
  return (suma / alumnos.length).toFixed(2);
};