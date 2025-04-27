import React from "react";

function Reservas() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add reservation logic here
  };

  return (
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
            required
          />
        </div>
        {/* ...other form fields... */}
        <button type="submit" className="btn btn-primary w-100">
          Reservar
        </button>
      </form>
    </div>
  );
}

export default Reservas;
