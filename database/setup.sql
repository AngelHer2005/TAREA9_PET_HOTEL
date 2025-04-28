CREATE DATABASE IF NOT EXISTS WEB_PET;

USE WEB_PET;

-- Tabla para cuentas de usuario
CREATE TABLE IF NOT EXISTS Cuentas (
    IdCuenta INT AUTO_INCREMENT PRIMARY KEY,
    Usuario VARCHAR(50) NOT NULL UNIQUE,
    Contraseña VARCHAR(255) NOT NULL
);

-- Tabla para datos de reservas
CREATE TABLE IF NOT EXISTS datoscuenta (
    iddatos INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    dni VARCHAR(20) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    celular VARCHAR(15) NOT NULL
);

-- Tabla para habitaciones reservadas
CREATE TABLE IF NOT EXISTS habitaciones (
    idhabitacion INT AUTO_INCREMENT PRIMARY KEY,
    tipohabitacion VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    tipo ENUM('premium', 'estandar') NOT NULL
);

-- Tabla para relacionar datos de cuenta y habitaciones
CREATE TABLE IF NOT EXISTS datosh (
    iddatos INT NOT NULL,
    idhabitacion INT NOT NULL,
    FOREIGN KEY (iddatos) REFERENCES datoscuenta(iddatos),
    FOREIGN KEY (idhabitacion) REFERENCES habitaciones(idhabitacion)
);
