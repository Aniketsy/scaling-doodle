// Create web server


const express = require('express'); // Import the express module
const app = express(); // Create an instance of the express application

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello, World!'); // Respond with "Hello, World!" for requests to the root URL
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Log the server's URL when it starts
});

