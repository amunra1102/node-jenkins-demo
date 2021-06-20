const express = require('express');

const port = 3000;

const app = express();

app.get('/', function (req, res) {
    res.json({ data: 'Hello world' });
});
console.log(port2);
app.listen(port, () => console.log(`Server is running on Port: ${port}`));
