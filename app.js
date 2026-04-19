const express = require('express');
const app = express();
const PORT = 5000;

// Serve static files
app.use(express.static('public'));

app.get('/api/status', (req, res) => {
    res.json({
        service: "Telecom API",
        status: "Active",
        uptime: process.uptime().toFixed(2) + " seconds",
        users: Math.floor(Math.random() * 1000),
        calls: Math.floor(Math.random() * 500)
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});