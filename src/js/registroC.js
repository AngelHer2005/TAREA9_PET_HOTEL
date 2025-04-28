const connection = require("./conexion");

function registrarUsuario(req, res) {
    const data = req.body;

    connection.query("SELECT COUNT(*) AS total FROM Cuentas", (err, rows) => {
        if (err) {
            return res.status(500).json({ error: "Error al obtener el total de cuentas" });
        }

        connection.query(
            "INSERT INTO Cuentas (IdCuenta, Usuario, Contraseña) VALUES (?, ?, ?)",
            [1, data.usuario, data.contraseña],
            (err) => {
                if (err) {
                    return res.status(500).json({ error: "Error al registrar el usuario" });
                }

                res.status(200).json({ message: "Usuario registrado con éxito" });
            }
        );
    });
}

module.exports = registrarUsuario;