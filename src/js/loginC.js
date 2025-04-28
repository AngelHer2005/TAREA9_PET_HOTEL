const connection = require("./conexion");

function iniciarSesion(req, res) {
    const data = req.body;

    connection.query(
        "SELECT COUNT(*) AS total FROM Cuentas WHERE Usuario = ? AND Contraseña = ?",
        [data.usuario, data.contraseña],
        (err, rows) => {
            if (err) {
                return res.status(500).json({ error: "Error al iniciar sesión" });
            }

            if (rows[0].total > 0) {
                res.status(200).json({ message: "Inicio de sesión exitoso" });
            } else {
                res.status(401).json({ error: "Credenciales incorrectas" });
            }
        }
    );
}

module.exports = iniciarSesion;
