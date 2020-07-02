const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const scales = require('./scales')

app.use(express.json());

app.get('/', (req, res) => {
    res.send(scales.getMajorScale('B'))
})

app.listen(port, () => {
    console.log(`>> Running at port ${port}!\n`);
});