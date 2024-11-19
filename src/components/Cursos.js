import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
const Cursos = () => {
  const cursos = [
    {
      imagen: '/curso-1.jpg',
      nivel: 'básico',
      precio: 'S/. 49.90',
      fecha: 'Actualizado 25/09/2024',
      titulo: 'Desarrollo frontend',
      sesiones: '15 Sesiones',
      duracion: '15h 25m 9s',
    },
    {
      imagen: '/curso-2.jpg',
      nivel: 'básico',
      precio: 'S/. 29.90',
      fecha: 'Actualizado 10/11/2024',
      titulo: 'Marketing Digital',
      sesiones: '8 Sesiones',
      duracion: '8h 10m 23s',
    },
    {
      imagen: '/curso-3.jpg',
      nivel: 'Intermedio',
      precio: 'S/. 39.90',
      fecha: 'Actualizado 18/03/2024',
      titulo: 'Álgebra lineal',
      sesiones: '6 Sesiones',
      duracion: '6h 45m 11s',
    },
    {
      imagen: '/curso-4.jpg',
      nivel: 'básico',
      precio: 'S/. 49.90',
      fecha: 'Actualizado 02/12/2024',
      titulo: 'Diseño Gráfico',
      sesiones: '10 Sesiones',
      duracion: '10h 33m 2s',
    },
    {
      imagen: '/curso-5.jpg',
      nivel: 'Intermedio',
      precio: 'S/. 39.90',
      fecha: 'Actualizado 29/01/2024',
      titulo: 'Contabilidad General',
      sesiones: '20 Sesiones',
      duracion: '18h 40m 42s',
    },
    {
      imagen: '/curso-6.jpg',
      nivel: 'Intermedio',
      precio: 'S/. 59.90',
      fecha: 'Actualizado 12/09/2024',
      titulo: 'Director de proyectos',
      sesiones: '30 Sesiones',
      duracion: '28h 52m 17s',
    },
    {
      imagen: '/curso-7.png',
      nivel: 'Avanzado',
      precio: 'S/. 70.00',
      fecha: 'Actualizado 17/11/2024',
      titulo: 'Comunicaciones de Datos',
      sesiones: '25 sesiones',
      duracion: '30h 40m 23s'
    },
    {
      imagen: '/curso-8.png',
      nivel: 'Avanzado',
      precio: 'S/. 64.30',
      fecha: 'Actualizado 18/10/2024',
      titulo: 'Ciberseguridad con cifrados',
      sesiones: '20 sesiones',
      duracion: '25h 50m 45s'
    }
  ];

  return (
    <section className="cursos" id="cursos">
      <h1 className="titulo">~ Nuestros cursos ~</h1>
      <div className="box-container">
        {cursos.map((curso, index) => (
          <div key={index} className="box">
            <div className="imagen">
              <img src={curso.imagen} alt="" />
              <h3>{curso.nivel}</h3>
            </div>
            <div className="contenido">
              <h4>{curso.precio}</h4>
              <p>{curso.fecha}</p>
              <h3>{curso.titulo}</h3>
              <div className="iconos">
                <span><i className="far fa-bookmark"></i> {curso.sesiones}</span>
                <span><i className="far fa-clock"></i> {curso.duracion}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cursos;
