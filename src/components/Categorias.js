import React from 'react';


const Categorias = () => {
  const categorias = [
    {
      imagen: '/categoria-1.png',
      titulo: 'Desarrollo Web',
      descripcion: 'Aprende a crear sitios y aplicaciones modernas, desde cero hasta nivel avanzado.',
    },
    {
      imagen: '/categoria-2.png',
      titulo: 'Matemáticas',
      descripcion: 'Mejora tus habilidades matemáticas con enfoques prácticos y desafiantes.',
    },
    {
      imagen: '/categoria-3.png',
      titulo: 'Diseño',
      descripcion: 'Domina las herramientas de diseño para crear proyectos visualmente impactantes.',
    },
    {
      imagen: '/categoria-4.png',
      titulo: 'Ingeniería',
      descripcion: 'Explora el mundo de la ingeniería con cursos prácticos y actualizados.',
    },
  ];

  return (
    <section className="categorias" id='categorias'>
      <h1 className="titulo">~ Nuestras categorías más populares ~</h1>

      <div className="box-container">
        {categorias.map((categoria, index) => (
          <div className="box" key={index}>
            <img src={categoria.imagen} alt={categoria.titulo} />
            <h3>{categoria.titulo}</h3>
            <p>{categoria.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categorias;
