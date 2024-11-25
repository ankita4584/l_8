const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MySQL Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "mysql",
  password: "utkarsh12@", // Replace with your DB password
  database: "school", // Replace with your DB name
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to MySQL database.");
  }
});

// Routes
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT email, role FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      if (results.length > 0) {
        const user = results[0];
        res.status(200).json({ role: user.role });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    });
  });
  

app.post("/complaint", (req, res) => {
  const { username, prn, com } = req.body;
  const query = "INSERT INTO complains (name, prn, complaints) VALUES (?, ?, ?)";
  db.query(query, [username, prn, com], (err, results) => {
    if (err) {
      console.error("Database error:", err);  // Log the error to the server console
      return res.status(500).send(err);
    }
    res.status(200).send("Complaint added successfully");
  });
  
});

app.get("/complaint", (req, res) => {
  const query = "SELECT * FROM complains";
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
});

// Start the server
const PORT = 3500;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
