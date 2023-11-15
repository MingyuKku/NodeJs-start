const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/sound/:name', (req, res) => {

    const { name } = req.params;

    const responseValue = (text) => {
        return res.json({
            'sound': text,
        })
    }
    
    if (name === 'dog') {
        responseValue('멍멍');
    } else if (name === 'duck') {
        responseValue('꽥꽥');
    } else if (name === 'pig') {
        responseValue('꿀꿀');
    } else {
        responseValue('알 수 없드아!');
    }

    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});