const connection = require("./conexion");

async function registrarUsuario(data) {
    try {
        const [rows] = await connection.query("SELECT COUNT(*) AS total FROM Cuentas");
        const totalCuentas = rows[0].total + 1;

        await connection.query(
            "INSERT INTO Cuentas (IdCuenta, Usuario, Contraseña) VALUES (?, ?, ?)",
            [totalCuentas, data.usuario, data.contraseña]
        );

        console.log("Usuario registrado con éxito.");
    } catch (error) {
        console.error("Error al registrar el usuario:", error);
    }
}

document.getElementById("registroForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const registroData = {
        usuario: formData.get("usuario"),
        contraseña: formData.get("contraseña"),
    };

    try {
        await registrarUsuario(registroData);
        alert("Registro realizado con éxito.");
        window.location.href = "../../index.html";
    } catch (error) {
        alert("Error al registrar el usuario. Por favor, inténtelo de nuevo.");
    }
});

module.exports = registrarUsuario;
