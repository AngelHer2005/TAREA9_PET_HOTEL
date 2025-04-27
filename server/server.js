require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de la conexión MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'pet_hotel_app',
  password: process.env.DB_PASSWORD || 'PasswordSeguro123',
  database: process.env.DB_NAME || 'WEB_PET',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Ruta de Registro
app.post('/api/registro', async (req, res) => {
  try {
    const { usuario, contraseña, email, nombre, dni, direccion, telefono } = req.body;
    
    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(contraseña, 10);
    
    // Iniciar transacción
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    
    try {
      // Insertar usuario
      const [userResult] = await conn.query(
        'INSERT INTO usuarios (usuario, contraseña, email) VALUES (?, ?, ?)',
        [usuario, hashedPassword, email]
      );
      
      // Insertar cliente
      await conn.query(
        'INSERT INTO clientes (nombre, dni, direccion, telefono, usuario_id) VALUES (?, ?, ?, ?, ?)',
        [nombre, dni, direccion, telefono, userResult.insertId]
      );
      
      await conn.commit();
      res.status(201).json({ success: true });
    } catch (error) {
      await conn.rollback();
      throw error;
    } finally {
      conn.release();
    }
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});

// Ruta de Login
app.post('/api/login', async (req, res) => {
  try {
    const { usuario, contraseña } = req.body;
    
    const [users] = await pool.query(
      'SELECT * FROM usuarios WHERE usuario = ?',
      [usuario]
    );
    
    if (users.length === 0) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    
    const user = users[0];
    const passwordMatch = await bcrypt.compare(contraseña, user.contraseña);
    
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    
    // Obtener datos del cliente
    const [clientes] = await pool.query(
      'SELECT * FROM clientes WHERE usuario_id = ?',
      [user.id]
    );
    
    res.json({
      success: true,
      usuario: {
        id: user.id,
        nombre: clientes[0]?.nombre,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

// Ruta para obtener tarifas
app.get('/api/tarifas', async (req, res) => {
  try {
    const [tarifas] = await pool.query('SELECT * FROM tarifas');
    res.json(tarifas);
  } catch (error) {
    console.error('Error al obtener tarifas:', error);
    res.status(500).json({ error: 'Error al obtener tarifas' });
  }
});

// Ruta para crear reserva
app.post('/api/reservas', async (req, res) => {
  try {
    const { cliente_id, tarifa_codigo, tipo_habitacion, fecha_inicio, fecha_fin } = req.body;
    
    // Obtener precio según tipo de habitación
    const [tarifas] = await pool.query(
      'SELECT precio_estandar, precio_premium FROM tarifas WHERE codigo = ?',
      [tarifa_codigo]
    );
    
    if (tarifas.length === 0) {
      return res.status(400).json({ error: 'Tarifa no válida' });
    }
    
    const precio = tipo_habitacion === 'premium' 
      ? tarifas[0].precio_premium 
      : tarifas[0].precio_estandar;
    
    // Calcular días y precio total
    const dias = (new Date(fecha_fin) - new Date(fecha_inicio)) / (1000 * 60 * 60 * 24);
    const precio_total = dias * precio;
    
    // Insertar reserva
    const [result] = await pool.query(
      `INSERT INTO reservas 
      (cliente_id, tarifa_codigo, tipo_habitacion, fecha_inicio, fecha_fin, precio_total) 
      VALUES (?, ?, ?, ?, ?, ?)`,
      [cliente_id, tarifa_codigo, tipo_habitacion, fecha_inicio, fecha_fin, precio_total]
    );
    
    res.status(201).json({ 
      success: true,
      reserva_id: result.insertId
    });
  } catch (error) {
    console.error('Error al crear reserva:', error);
    res.status(500).json({ error: 'Error al crear reserva' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});