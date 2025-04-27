import React from "react";

function Registro() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add registration logic here
  };

  return (
    <div className="login">
      <h1 className="text-center">REGÍSTRATE</h1>
      <form onSubmit={handleSubmit} className="loginF">
        <div className="mb-3">
          <label htmlFor="usuario" className="form-label">
            USUARIO:
          </label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contraseña" className="form-label">
            CONTRASEÑA:
          </label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg w-100 mb-2">
          REGISTRARSE
        </button>
      </form>
    </div>
  );
}

export default Registro;
