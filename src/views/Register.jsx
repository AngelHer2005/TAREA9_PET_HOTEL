import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    contraseña: ''
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
    // Aquí iría la lógica de registro
    console.log('Datos de registro:', formData);
  };

  return (
    <div className="login">
      <h1 className="text-center">REGÍSTRATE</h1>
      <div className="loginF">
        <form id="registroForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="usuario" className="form-label">USUARIO:</label>
            <input 
              type="text" 
              id="usuario" 
              name="usuario" 
              className="form-control"
              value={formData.usuario}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contraseña" className="form-label">CONTRASEÑA:</label>
            <input 
              type="password" 
              id="contraseña" 
              name="contraseña" 
              className="form-control"
              value={formData.contraseña}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-success btn-lg w-100 mb-2" type="submit">REGISTRARSE</button>
          <Link to="/login" className="btn btn-primary btn-lg w-100">INGRESAR SESIÓN</Link>
        </form>
      </div>
      <script src="/js/auth/register.js" type="module"></script>
    </div>
  );
};

export default Register;