const express = require('express');
const mongoose = require('mongoose');

const app = express();

const username = encodeURIComponent('june');
const password = encodeURIComponent('abcd');
const databaseName = 'practice-youtube';

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.i259urb.mongodb.net/${databaseName}?retryWrites=true&w=majority`)
.then(() => console.log(`${databaseName} 몽고db 연결...!`))
.catch((err) => console.log('err', err))

app.get('/', (req, res) => {
    return res.send('하이하이')
});



const port = 5000;
app.listen(port);