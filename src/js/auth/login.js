const { executeQuery } = require('../shared/connection');

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    usuario: e.target.usuario.value,
    contraseña: e.target.contraseña.value
  };

  try {
    const result = await executeQuery(
      'SELECT IdCuenta, Usuario FROM Cuentas WHERE Usuario = ? AND Contraseña = ?',
      [formData.usuario, formData.contraseña]
    );
    
    if (result.length > 0) {
      localStorage.setItem('user', JSON.stringify(result[0]));
      alert('Inicio de sesión exitoso');
      window.location.href = '/reservas.html';
    } else {
      alert('Credenciales incorrectas');
    }
  } catch (error) {
    console.error('Error en login:', error);
    alert('Error al iniciar sesión');
  }
});