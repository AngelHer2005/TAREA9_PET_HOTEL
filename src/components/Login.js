import React, { useState } from "react";

function Login() {
    const [formData, setFormData] = useState({ usuario: "", contraseña: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("/api/login", {
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
            alert("Error al iniciar sesión. Por favor, inténtelo de nuevo.");
        }
    };

    return (
        <div className="login">
            <h1 className="text-center">INGRESA SESIÓN</h1>
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
                        value={formData.usuario}
                        onChange={handleChange}
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
                        value={formData.contraseña}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg w-100 mb-2">
                    INGRESAR
                </button>
                <a href="/Registro" class="btn btn-primary btn-lg w-100">REGISTRARSE</a>
            </form>
        </div>
    );
}

export default Login;
