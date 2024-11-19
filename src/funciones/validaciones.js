
const ValidacionesContacto = {
    validarFormulario(formData) {
      const errors = {};
  

      if (!formData.nombre) {
        errors.nombre = 'El nombre es obligatorio.';
      } else if (!/^[a-zA-Z\s]+$/.test(formData.nombre)) {
        errors.nombre = 'El nombre no es valido.';
      }
  

      if (!formData.apellido) {
        errors.apellido = 'Los apellidos son obligatorios.';
      } else if (!/^[a-zA-Z\s]+$/.test(formData.apellido)) {
        errors.apellido = 'Los apellidos no son validos.';
      }
  

      if (!formData.email) {
        errors.email = 'El correo electrónico es obligatorio.';
      } else if (!/^[\w.%+-]+@(gmail|outlook)\.com$/.test(formData.email)) {
        errors.email = 'El correo electrónico debe ser de dominio gmail.com o outlook.com.';
      }
  

      if (!formData.numero) {
        errors.numero = 'El número es requerido.';
      } else if (!/^9\d{8}$/.test(formData.numero)) {
        errors.numero = 'El número no es valido.';
      }
  
      if (!formData.mensaje) {
        errors.mensaje = 'El mensaje es requerido.';
      }
  
      return errors;
    }
  };
  
  export default ValidacionesContacto;
  