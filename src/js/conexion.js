const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root", // Cambiar si es necesario
    password: "", // Cambiar si es necesario
    database: "WEB_PET",
    port: 3306 // Cambiar si es necesario
});

connection.connect((err) => {
    if (err) {
        console.error("Error al conectar con la base de datos:", err);
        return;
    }
    console.log("Conexión exitosa a la base de datos.");
});

module.exports = connection;
