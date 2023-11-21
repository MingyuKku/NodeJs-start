const express = require('express');
const mongoose = require('mongoose');
const { User } = require('./models/User');
const config = require('./config/key');

const app = express();
const port = 5000;

// application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// application/json
app.use(express.json());


mongoose.connect(config.mongoURI)
.then(() => console.log('몽고db 연결...!'))
.catch((err) => console.log('err', err))

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.post('/register', async (req, res) => {

    // 회원 가입시 필요한 정보를 client에서 가져와
    // 데이터베이스에 insert

    console.log('이거 머딩', req.body)

    const user = new User(req.body);

    await user.save()
    .then(() => {
        res.status(200).json({success: true})
    })
    .catch((err) => {
        console.log('err', err);
        res.json({success: false, error: err})
    })
})

app.listen(port, () => {
    console.log(`${port} 포트로 잘 연결됐어!`);
})
