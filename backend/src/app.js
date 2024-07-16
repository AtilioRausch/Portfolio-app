const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/api/work', (req, res) => {
    if (fs.existsSync('./src/datos/work.json')) {
        const data = fs.readFileSync('./src/datos/work.json', "utf-8");
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    }
    else {
        res.status(404).send('No se encontraron trabajos');
    }
})

app.listen(3000, () => console.log('Server running on port 3000'));