const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// Route for the Virtual Administrative Support page
app.get('/virtual-administrative-support', (req, res) => {
    res.sendFile(path.join(__dirname, 'virtual-administrative-support.html'));
});

// Route to handle form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Simulate saving data or sending an email
    console.log(`Form submitted: Name: ${name}, Email: ${email}, Message: ${message}`);

    // Respond to the client
    res.json({ success: true, message: 'Form submitted successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
