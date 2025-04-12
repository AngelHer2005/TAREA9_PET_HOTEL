const connection = require("./conexion");

async function realizarReserva(data) {
    const tarifas = {
        HRT: { nombre: "Habitación Raza Miny o Toy", premium: 60, estandar: 55 },
        HRP: { nombre: "Habitación Raza Pequeña", premium: 75, estandar: 70 },
        HRM: { nombre: "Habitación Raza Mediana", premium: 65, estandar: 60 },
        HRG: { nombre: "Habitación Raza Grande", premium: 85, estandar: 80 },
        HREG: { nombre: "Habitación Raza Extra Grande", premium: 100, estandar: 95 },
    };

    const tarifa = tarifas[data.tarifa];
    const precio = tarifa[data.habitacion];

    try {
        const [rows] = await connection.query("SELECT COUNT(*) AS total FROM datoscuenta");
        const id = rows[0].total + 1;

        await connection.query(
            "INSERT INTO datoscuenta (iddatos, nombre, dni, direccion, celular) VALUES (?, ?, ?, ?, ?)",
            [id, data.nombre_dueno, data.dni, data.dir, data.telefono]
        );

        await connection.query(
            "INSERT INTO habitaciones (idhabitacion, tipohabitacion, precio, tipo) VALUES (?, ?, ?, ?)",
            [id, tarifa.nombre, precio, data.habitacion]
        );

        await connection.query("INSERT INTO datosh (iddatos, idhabitacion) VALUES (?, ?)", [id, id]);

        console.log("Reserva realizada con éxito.");
    } catch (error) {
        console.error("Error al realizar la reserva:", error);
    }
}

module.exports = realizarReserva;
