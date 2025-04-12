const connection = require("./conexion");

async function iniciarSesion(data) {
    try {
        const [rows] = await connection.query(
            "SELECT COUNT(*) AS total FROM Cuentas WHERE Usuario = ? AND Contraseña = ?",
            [data.usuario, data.contraseña]
        );

        if (rows[0].total > 0) {
            console.log("Inicio de sesión exitoso.");
        } else {
            console.log("Credenciales incorrectas.");
        }
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
    }
}

document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const loginData = {
        usuario: formData.get("usuario"),
        contraseña: formData.get("contraseña"),
    };

    await iniciarSesion(loginData);
});

module.exports = iniciarSesion;
