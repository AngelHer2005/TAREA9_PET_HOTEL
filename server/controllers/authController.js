const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "WEB_PET"
});

exports.login = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT COUNT(*) AS total FROM Cuentas WHERE Usuario = ? AND Contraseña = ?",
      [req.body.usuario, req.body.contraseña]
    );
    rows[0].total > 0 
      ? res.status(200).json({ success: true })
      : res.status(401).json({ success: false });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};