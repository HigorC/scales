const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5001;

const scales = require('./scales')

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    if (req.query.key) {
        res.send({
            majorNatural: scales.getNaturalMajor(req.query.key),
            majorPentatonic: scales.getPentatonicMajor(req.query.key),
            minorNatural: scales.getNaturalMinor(req.query.key),
            minorPentatonic: scales.getPentatonicMinor(req.query.key)
        })
    }
    res.send('0')
})

app.listen(port, () => {
    console.log(`>> Running at port ${port}!\n`);
});