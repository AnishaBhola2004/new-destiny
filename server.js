const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const db = new sqlite3.Database('travel-website.db');

db.run(`
    CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        destination TEXT,
        guests INTEGER,
        arrival DATE,
        departure DATE
    )
`);

db.run(`
    CREATE TABLE IF NOT EXISTS contact_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        number INTEGER,
        subject TEXT,
        message TEXT
    )
`);

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit', (req, res) => {
    const { destination, guests, arrival, departure } = req.body;

    db.run(`
        INSERT INTO bookings (destination, guests, arrival, departure)
        VALUES (?, ?, ?, ?)
    `, [destination, guests, arrival, departure], (err) => {
        if (err) {
            return res.status(500).send("Failed to save booking.");
        }
        res.redirect('/');
    });
});

app.post('/contact', (req, res) => {
    const { name, email, number, subject, message } = req.body;

    db.run(`
        INSERT INTO contact_messages (name, email, number, subject, message)
        VALUES (?, ?, ?, ?, ?)
    `, [name, email, number, subject, message], (err) => {
        if (err) {
            return res.status(500).send("Failed to save message.");
        }
        res.redirect('/');
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
