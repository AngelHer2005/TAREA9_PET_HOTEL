import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header>
        <a href="#" className="logo text-center">
          PET HOTEL
        </a>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/reservas">Reservas</Link>
            </li>
            <li>
              <Link to="/registro">Registro</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="Inicio" id="Inicio">
          <img
            src="https://static.wixstatic.com/media/9d51e4_05e4350bc8294bba98c84aefac1956df~mv2.png/v1/fill/w_789,h_446,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGOMIPATA.png"
            alt="LOGO"
          />
          <div className="Bienvenido">
            <span>BIENVENIDO A</span>
            <span>PET HOTEL</span>
            <p>
              ¡Tu mascota merece lo mejor! <br />
              En nuestro PET HOTEL cuidamos de ellos con cariño y
              profesionalismo. ¡Haz tu reserva ahora!
            </p>
            <Link
              to="/reservas"
              style={{ fontWeight: "bold" }}
              className="btn btn-danger btn-lg"
            >
              HAZ TU RESERVA
            </Link>
          </div>
        </div>
        <div className="Nosotros" id="Nosotros">
          <span>SOBRE NOSOTROS</span>
          <p>
            En HOTEL DE CANES, entendemos que tu mascota es parte de tu familia.
            Nuestro compromiso es brindarle a tu compañero peludo un hogar lejos
            de casa, donde se sienta amado, seguro y feliz.
          </p>
        </div>
        <div className="Servicios" id="Servicios">
          <p className="text-center">NUESTROS SERVICIOS</p>
          <div className="ser1">
            <img
              src="https://img.freepik.com/vector-premium/diseno-logotipo-tienda-mascotas-cachorro-medio-patas-perro-ilustracion-vector-plano-plantilla-animal_463676-1612.jpg?w=740"
              alt=""
            />
            <span>Hospedaje Premium</span>
            <p>
              Ofrecemos alojamiento de primera clase para tu mascota en un
              entorno seguro y confortable. Nuestras instalaciones están
              diseñadas para que tu mascota se sienta como en casa mientras
              estás fuera, con atención personalizada y comodidades especiales.
            </p>
          </div>
          {/* ...other services... */}
        </div>
        <hr />
        <div className="Contacto" id="Contacto">
          <div className="contact-info">
            <h2>CONTÁCTANOS</h2>
            <p>Av. Los Álamos 183, Chilca 15870</p>
            <p>Chilca, Peru</p>
            <p>997 150 226</p>
            <p>
              <a href="mailto:angelhernanpatricioarroyo@gmail.com">
                angelhernanpatricioarroyo@gmail.com
              </a>
            </p>
            <p>Horario de atención:</p>
            <p>De 8:30 am a 5:30 pm</p>
          </div>
          <div className="contact-form">
            <h1>FORMULARIO</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="nombre">Nombre:&ensp;</label>
                <input type="text" id="nombre" name="nombre" required />
                <label htmlFor="apellido">Apellido:&ensp;</label>
                <input type="text" id="apellido" name="apellido" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email:&ensp;</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje">Mensaje:&ensp;</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success btn-lg">
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
