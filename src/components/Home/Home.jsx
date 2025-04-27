import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/global.css';  // Asegúrate de tener este archivo en la misma carpeta

// Importar imágenes (debes moverlas a tu carpeta src/assets)
import logo from '../../assets/images/logo.png';
import wspIcon from '../../assets/images/wsp.png';
import githubIcon from '../../assets/images/github.png';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("abajo", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header>
        <Link to="/" className="logo text-center">PET HOTEL</Link>
        <nav>
          <ul>
            <li><a href="#Inicio">INICIO</a></li>
            <li><a href="#Nosotros">NOSOTROS</a></li>
            <li><a href="#Servicios">SERVICIOS</a></li>
            <li><Link to="/reservas">RESERVAS</Link></li>
            <li><a href="#Contacto">CONTACTO</a></li>
            <li><Link to="/login">LOGOUT</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="Inicio" id="Inicio">
          <img src={logo} alt="LOGO" />
          <div className="Bienvenido">
            <span>BIENVENIDO A</span>
            <span>PET HOTEL</span>
            <p>¡Tu mascota merece lo mejor! <br />En nuestro PET HOTEL cuidamos de ellos con cariño y profesionalismo. ¡Haz tu reserva ahora!</p>
            <Link to="/reservas" style={{ fontWeight: 'bold' }} className="btn btn-danger btn-lg">HAZ TU RESERVA</Link>
          </div>
        </div>
        
        {/* Resto del contenido... */}
        {/* Asegúrate de reemplazar todas las imágenes con imports y todas las rutas con Link */}
      </main>
    </>
  );
};

export default Home;