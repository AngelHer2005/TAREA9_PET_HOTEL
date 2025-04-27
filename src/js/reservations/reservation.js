const { executeQuery } = require('../shared/connection');

document.getElementById('reservaForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Verificar sesión
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    alert('Debe iniciar sesión primero');
    return window.location.href = '/login.html';
  }

  const reservaData = {
    cliente_id: user.IdCuenta,
    nombre_dueno: e.target.nombre_dueno.value,
    dni: e.target.dni.value,
    direccion: e.target.dir.value,
    telefono: e.target.telefono.value,
    tarifa: e.target.tarifa.value,
    habitacion: e.target.habitacion.value
  };

  try {
    // Obtener precio de la tarifa seleccionada
    const [tarifa] = await executeQuery(
      'SELECT precio_estandar, precio_premium FROM tarifas WHERE codigo = ?',
      [reservaData.tarifa]
    );
    
    const precio = reservaData.habitacion === 'premium' 
      ? tarifa.precio_premium 
      : tarifa.precio_estandar;

    // Insertar reserva
    await executeQuery(
      `INSERT INTO reservas 
      (cliente_id, nombre_dueno, dni, direccion, telefono, tarifa_codigo, tipo_habitacion, precio) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        reservaData.cliente_id,
        reservaData.nombre_dueno,
        reservaData.dni,
        reservaData.direccion,
        reservaData.telefono,
        reservaData.tarifa,
        reservaData.habitacion,
        precio
      ]
    );
    
    alert('Reserva realizada con éxito!');
    window.location.href = '/index.html';
    
  } catch (error) {
    console.error('Error en reserva:', error);
    alert('Error al realizar reserva');
  }
});