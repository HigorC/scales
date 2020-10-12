const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5001;

const scales = require('./scales')

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    if (req.query.key) {
        res.send(scales.getAllScales(req.query.key))
    }
    res.status(400)
    res.send('Key param is needed. Try to add in your url something like ?key=a')
})

app.listen(port, () => {
    console.log(`>> Running at port ${port}!\n`);
});