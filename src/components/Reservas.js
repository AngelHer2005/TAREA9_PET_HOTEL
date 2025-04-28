import React, { useState } from "react";

function Reservas() {
    const [formData, setFormData] = useState({
        nombre_dueno: "",
        dni: "",
        dir: "",
        telefono: "",
        tarifa: "",
        habitacion: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("/api/reserva", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (response.ok) {
                alert(result.message);
            } else {
                alert(result.error);
            }
        } catch (error) {
            alert("Error al realizar la reserva. Por favor, inténtelo de nuevo.");
        }
    };

    return (
        <div style={{ backgroundColor: "cornsilk", minHeight: "100vh", padding: "20px" }}>
            <div className="container mt-5">
                <h1 className="text-center mb-4">Reserva para tu Mascota</h1>
                <form onSubmit={handleSubmit} className="p-4 rounded bg-light shadow">
                    <div className="mb-3">
                        <label htmlFor="nombre_dueno" className="form-label">
                            Nombre del Dueño:
                        </label>
                        <input
                            type="text"
                            id="nombre_dueno"
                            name="nombre_dueno"
                            className="form-control"
                            value={formData.nombre_dueno}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dni" className="form-label">
                            DNI del Dueño:
                        </label>
                        <input
                            type="text"
                            id="dni"
                            name="dni"
                            className="form-control"
                            value={formData.dni}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dir" className="form-label">
                            Dirección:
                        </label>
                        <input
                            type="text"
                            id="dir"
                            name="dir"
                            className="form-control"
                            value={formData.dir}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">
                            Teléfono:
                        </label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            className="form-control"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tarifa" className="form-label">
                            Selecciona la tarifa:
                        </label>
                        <select
                            id="tarifa"
                            name="tarifa"
                            className="form-select"
                            value={formData.tarifa}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>
                                Selecciona una opción
                            </option>
                            <option value="HRT">
                                Habitación Raza Miny o Toy (E: S/. 55 - P: S/. 60)
                            </option>
                            <option value="HRP">
                                Habitación Raza Pequeña (E: S/. 70 - P: S/. 75)
                            </option>
                            <option value="HRM">
                                Habitación Raza Mediana (E: S/. 60 - P: S/. 65)
                            </option>
                            <option value="HRG">
                                Habitación Raza Grande (E: S/. 80 - P: S/. 85)
                            </option>
                            <option value="HREG">
                                Habitación Raza Extra Grande (E: S/. 95 - P: S/. 100)
                            </option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="habitacion" className="form-label">
                            Seleccione el tipo de habitación:
                        </label>
                        <select
                            id="habitacion"
                            name="habitacion"
                            className="form-select"
                            value={formData.habitacion}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>
                                Selecciona una opción
                            </option>
                            <option value="premium">Premium</option>
                            <option value="estandar">Estándar</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Reservar
                    </button>
                    <div className="text-center mt-3">
                        <a href="/" className="btn btn-secondary">
                            Volver a la pantalla principal
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Reservas;
