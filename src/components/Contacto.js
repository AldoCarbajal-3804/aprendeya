import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    numero: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="contacto" id="contacto">
      <h1 className="titulo">~ Contacto ~</h1>
      <div className="formulario">
        <div className="imagen">
          <img src="/contacto.png" alt="Imagen de contacto" />
        </div>
        <form id="formulario" onSubmit={handleSubmit}>
          <h3>Envíanos un mensaje</h3>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre"
            className="box"
            value={formData.nombre}
            onChange={handleChange}
          />
          <input
            type="text"
            id="apellido"
            placeholder="Apellido"
            className="box"
            value={formData.apellido}
            onChange={handleChange}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="box"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            id="numero"
            placeholder="Número"
            className="box"
            value={formData.numero}
            onChange={handleChange}
          />
          <textarea
            id="mensaje"
            placeholder="Mensaje"
            className="box"
            cols="30"
            rows="10"
            value={formData.mensaje}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn">
            <span className="text text-1">Enviar</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
