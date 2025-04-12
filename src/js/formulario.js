const nodemailer = require("nodemailer");

async function enviarFormulario(data) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "tu_correo@gmail.com",
            pass: "tu_contraseña",
        },
    });

    const mailOptions = {
        from: `${data.nombre} ${data.apellido} <${data.email}>`,
        to: "angelhernanpatricioarroyo@gmail.com",
        subject: "Email de Prueba",
        text: `Nombre: ${data.nombre} ${data.apellido}\nEmail: ${data.email}\nMensaje:\n${data.mensaje}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Correo enviado con éxito.");
    } catch (error) {
        console.error("Error al enviar el correo:", error);
    }
}

document.querySelector("form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formularioData = {
        nombre: formData.get("nombre"),
        apellido: formData.get("apellido"),
        email: formData.get("email"),
        mensaje: formData.get("mensaje"),
    };

    console.log("Formulario enviado:", formularioData);
    alert("Formulario enviado con éxito.");
    await enviarFormulario(formularioData);
    window.location.href = "../public/HOME.html";
});

module.exports = enviarFormulario;
