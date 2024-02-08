const express = require('express');
const cors = require('cors')
const app = express();
const path=require('path')
const port = 3000;
app.use(cors());
app.get('/', (req, res) => {
    console.log(__dirname);
    const filePath = path.join(__dirname, '/num-app.html');

    res.sendFile(filePath);
});

// sample testcase -> http://localhost:3000/add?num1=2&num2=4 => output:6
// num-app.html for e2e workflow
app.get('/add', (req, res) => {
    // Extracting two numbers from query parameters
    // should integrate this rest endpoint in num-app JS scirpt
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Invalid numbers');
    } else {
        const sum = num1 + num2;
        res.send(`The sum of ${num1} and ${num2} is: ${sum}`);
    }
});

app.listen(port);