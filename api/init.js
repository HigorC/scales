const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const scales = require('./scales')

app.use(express.json());

app.get('/', (req, res) => {
    if (req.query.note) {
        res.send({
            major: {
                natural: scales.getNaturalMajor(req.query.note),
                pentatonic: scales.getPentatonicMajor(req.query.note)
            },
            minor: {
                natural: scales.getNaturalMinor(req.query.note),
                pentatonic: scales.getPentatonicMinor(req.query.note)
            }
        })
    }
    res.send('0')
})

app.listen(port, () => {
    console.log(`>> Running at port ${port}!\n`);
});