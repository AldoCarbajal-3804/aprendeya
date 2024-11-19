import React, { useState } from 'react';
import ValidacionesContacto from '../funciones/validaciones';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    numero: '',
    mensaje: ''
  });

  //Agregado
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    //Agregado
    setErrors({ ...errors, [id]: '' });
  };


  /*const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }; */

  //Agregado
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = ValidacionesContacto.validarFormulario(formData);

    if (Object.keys(newErrors).length === 0) {
      alert('Usuario registrado');
      console.log('Formulario enviado:', formData);
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        numero: '',
        mensaje: ''
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
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
            /*className="box"
            value={formData.nombre}
            onChange={handleChange}*/
            //Agregado 
            className={`box ${errors.nombre ? 'input-error' : ''}`}
            value={formData.nombre}
            onChange={handleChange}
          />
          {errors.nombre && <span className="error">{errors.nombre}</span>}

          <input
            type="text"
            id="apellido"
            placeholder="Apellido"/*
            className="box"
            value={formData.apellido}
            onChange={handleChange}*/
            //Agregado
            className={`box ${errors.apellido ? 'input-error' : ''}`}
            value={formData.apellido}
            onChange={handleChange}
          />
          {errors.apellido && <span className="error">{errors.apellido}</span>}

          <input
            type="email"
            id="email"
            placeholder="Email"/*
            className="box"
            value={formData.email}
            onChange={handleChange}*/
            className={`box ${errors.email ? 'input-error' : ''}`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            type="text"
            id="numero"
            placeholder="Número"/*
            className="box"
            value={formData.numero}
            onChange={handleChange}*/
            className={`box ${errors.numero ? 'input-error' : ''}`}
            value={formData.numero}
            onChange={handleChange}
          />
          {errors.numero && <span className="error">{errors.numero}</span>}

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
