require('dotenv').config();
const express = require('express');
const http = require('http');

// Inits
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    res.send("😋 We are serving freshly cooked food 🍲");
});


// Create and start the server
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Restaurant open at:${PORT}`);
});