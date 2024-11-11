import React from 'react';

const Sobre = () => {
  return (
    <section className="sobre" id="sobre">
      <h1 className="titulo">~ Sobre Nosotros ~</h1>

      <div className="container">
        <figure className="sobre-imagen">
          <img src="/sobre.jpg" alt="Sobre nosotros" height="500" />
        </figure>

        <div className="sobre-contenido">
          <h3>+3 Años de experiencia</h3>
          <p>
            En nuestra plataforma, nos enorgullece ofrecer formación de alta calidad con
            más de 3 años de experiencia en el sector educativo. Nos dedicamos a ayudar a
            personas de todas las edades a desarrollar nuevas habilidades y mejorar su futuro profesional.
          </p>
          <p>
            Con un enfoque centrado en el estudiante, hemos diseñado nuestros cursos para que sean accesibles,
            interactivos y efectivos. Nuestra misión es ayudarte a alcanzar tus objetivos, ofreciendo contenido
            relevante y actualizado, impartido por profesionales con amplia trayectoria.
          </p>
          <a href="#" className="btn">
            <span className="text text-1">Leer más</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
