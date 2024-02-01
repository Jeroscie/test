const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000; // Replace with your desired port

app.use(bodyParser.json());

app.post('/receive-info', (req, res) => {
    const userIP = req.body.userIP;

    // Handle the received information as needed
    console.log('User IP Address:', userIP);

    // Save the IP address to a text file
    saveIPToFile(userIP);

    // Send a response if necessary
    res.send('Information received successfully.');
});

function saveIPToFile(userIP) {
    const filePath = 'ip_log.txt';

    // Append the user IP to the text file
    fs.appendFile(filePath, userIP + '\n', (err) => {
        if (err) throw err;
        console.log('User IP Address saved to', filePath);
    });
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
