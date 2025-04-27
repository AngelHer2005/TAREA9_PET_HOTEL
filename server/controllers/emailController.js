const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: `${req.body.nombre} <${req.body.email}>`,
      to: "destino@email.com",
      subject: "Nuevo mensaje de contacto",
      text: req.body.mensaje
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};