const mysql = require('mysql2/promise');

// Configuración mejorada con manejo de errores
const createConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "pet_hotel_app",
      password: "",
      database: "WEB_PET",
      connectTimeout: 10000
    });
    console.log("Conexión a MySQL establecida");
    return connection;
  } catch (error) {
    console.error("Error de conexión a MySQL:", error);
    throw error;
  }
};

// Función para ejecutar queries con manejo de conexión
const executeQuery = async (query, params) => {
  let connection;
  try {
    connection = await createConnection();
    const [results] = await connection.execute(query, params);
    return results;
  } finally {
    if (connection) await connection.end();
  }
};

module.exports = { executeQuery };