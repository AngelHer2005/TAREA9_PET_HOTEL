const { executeQuery } = require('../shared/connection');

document.getElementById('registroForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    usuario: e.target.usuario.value,
    contraseña: e.target.contraseña.value
  };

  try {
    // 1. Verificar si el usuario existe
    const checkUser = await executeQuery(
      'SELECT COUNT(*) AS count FROM Cuentas WHERE Usuario = ?',
      [formData.usuario]
    );
    
    if (checkUser[0].count > 0) {
      return alert('El usuario ya existe');
    }

    // 2. Insertar nuevo usuario
    await executeQuery(
      'INSERT INTO Cuentas (Usuario, Contraseña) VALUES (?, ?)',
      [formData.usuario, formData.contraseña]
    );
    
    alert('Registro exitoso!');
    window.location.href = '/login.html';
    
  } catch (error) {
    console.error('Error en registro:', error);
    alert('Error al registrar usuario');
  }
});