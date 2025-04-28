const connection = require("./conexion");

function realizarReserva(req, res) {
    const data = req.body;
    const tarifas = {
        HRT: { nombre: "Habitación Raza Miny o Toy", premium: 60, estandar: 55 },
        HRP: { nombre: "Habitación Raza Pequeña", premium: 75, estandar: 70 },
        HRM: { nombre: "Habitación Raza Mediana", premium: 65, estandar: 60 },
        HRG: { nombre: "Habitación Raza Grande", premium: 85, estandar: 80 },
        HREG: { nombre: "Habitación Raza Extra Grande", premium: 100, estandar: 95 },
    };

    const tarifa = tarifas[data.tarifa];
    const precio = tarifa[data.habitacion];

    connection.query("SELECT COUNT(*) AS total FROM datoscuenta", (err, rows) => {
        if (err) {
            return res.status(500).json({ error: "Error al obtener el total de cuentas" });
        }

        const id = rows[0].total + 1;

        connection.query(
            "INSERT INTO datoscuenta (nombre, dni, direccion, celular) VALUES (?, ?, ?, ?)",
            [data.nombre_dueno, data.dni, data.dir, data.telefono],
            (err) => {
                if (err) {
                    return res.status(500).json({ error: "Error al insertar en datoscuenta" });
                }

                connection.query(
                    "INSERT INTO habitaciones (tipohabitacion, precio, tipo) VALUES (?, ?, ?)",
                    [tarifa.nombre, precio, data.habitacion],
                    (err) => {
                        if (err) {
                            return res.status(500).json({ error: "Error al insertar en habitaciones" });
                        }

                        connection.query(
                            "INSERT INTO datosh (iddatos, idhabitacion) VALUES (?, ?)",
                            [id, id],
                            (err) => {
                                if (err) {
                                    return res.status(500).json({ error: "Error al insertar en datosh" });
                                }

                                res.status(200).json({ message: "Reserva realizada con éxito" });
                            }
                        );
                    }
                );
            }
        );
    });
}

module.exports = realizarReserva;