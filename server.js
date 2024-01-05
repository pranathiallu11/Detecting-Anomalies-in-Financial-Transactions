const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Define a simple API endpoint
app.post('/api/check-fraud', (req, res) => {
    // Placeholder fraud detection logic
    const { paymentType, amount, originName, oldBalance, newBalance, destName } = req.body;
    const isFraud = amount > oldBalance * 0.5; // Adjust logic as needed

    // Send response to frontend
    res.json({ result: isFraud ? 'Fraud Detected!' : 'No Fraud Detected.' });
});

// Start the server
app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});