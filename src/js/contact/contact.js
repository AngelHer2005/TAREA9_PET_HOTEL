const { executeQuery } = require('../shared/connection');

document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    nombre: e.target.nombre.value,
    email: e.target.email.value,
    mensaje: e.target.mensaje.value
  };

  try {
    // Guardar en base de datos
    await executeQuery(
      'INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)',
      [formData.nombre, formData.email, formData.mensaje]
    );
    
    // Enviar correo (opcional)
    // ... código para enviar correo ...
    
    alert('Mensaje enviado con éxito!');
    e.target.reset();
    
  } catch (error) {
    console.error('Error en contacto:', error);
    alert('Error al enviar mensaje');
  }
});