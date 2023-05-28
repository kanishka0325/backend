const express = require('express'); 

const app = express();

app.get('/', (req, res)=>{
    res.json({msg: 'Hello, Backend CI/CD Pipeline!'});
});

app.get('/tets', (req, res)=>{
    res.json({msg: 'Hello, Backend Test CI/CD pipeline!'});
});

app.listen(4000);
