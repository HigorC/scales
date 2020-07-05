const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const scales = require('./scales')

app.use(express.json());

app.get('/', (req, res) => {
    if (req.query.note) {
        res.send({
            major: scales.getNaturalMajor(req.query.note),
            minor: scales.getNaturalMinor(req.query.note)
        })
    }
})

app.listen(port, () => {
    console.log(`>> Running at port ${port}!\n`);
});