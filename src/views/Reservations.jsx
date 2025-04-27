import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Reservations = () => {
  const [formData, setFormData] = useState({
    nombre_dueno: '',
    dni: '',
    dir: '',
    telefono: '',
    tarifa: '',
    habitacion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de reserva
    console.log('Datos de reserva:', formData);
  };

  return (
    <div className="reserva" style={{ backgroundColor: 'cornsilk' }}>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Reserva para tu Mascota</h1>
        <form id="reservaForm" className="p-4 rounded bg-light shadow" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre_dueno" className="form-label">Nombre del Dueño:</label>
            <input 
              type="text" 
              id="nombre_dueno" 
              name="nombre_dueno" 
              className="form-control" 
              required
              value={formData.nombre_dueno}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dni" className="form-label">DNI del Dueño:</label>
            <input 
              type="text" 
              id="dni" 
              name="dni" 
              className="form-control" 
              required
              value={formData.dni}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dir" className="form-label">Dirección:</label>
            <input 
              type="text" 
              id="dir" 
              name="dir" 
              className="form-control" 
              required
              value={formData.dir}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Teléfono:</label>
            <input 
              type="tel" 
              id="telefono" 
              name="telefono" 
              className="form-control" 
              required
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tarifa" className="form-label">Selecciona la tarifa:</label>
            <select 
              id="tarifa" 
              name="tarifa" 
              className="form-select" 
              required
              value={formData.tarifa}
              onChange={handleChange}
            >
              <option value="" selected disabled>Selecciona una opción</option>
              <option value="HRT">Habitación Raza Miny o Toy (E: S/. 55 - P: S/. 60)</option>
              <option value="HRP">Habitación Raza Pequeña (E: S/. 70 - P: S/. 75)</option>
              <option value="HRM">Habitación Raza Mediana (E: S/. 60 - P: S/. 65)</option>
              <option value="HRG">Habitación Raza Grande (E: S/. 80 - P: S/. 85)</option>
              <option value="HREG">Habitación Raza Extra Grande (E: S/. 95 - P: S/. 100)</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="habitacion" className="form-label">Seleccione el tipo de habitación:</label>
            <select 
              id="habitacion" 
              name="habitacion" 
              className="form-select" 
              required
              value={formData.habitacion}
              onChange={handleChange}
            >
              <option value="" selected disabled>Selecciona una opción</option>
              <option value="premium">Premium</option>
              <option value="estandar">Estándar</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">Reservar</button>
          <div className="text-center mt-3">
            <Link to="/" className="btn btn-secondary">Volver a la pantalla principal</Link>
          </div>
        </form>
      </div>
      <script src="../js/reservations/reservas.js" type="module"></script>
    </div>
  );
};

export default Reservations;