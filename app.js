const express = require('express'); 

const app = express();

app.get('/', (req, res)=>{
    res.json({msg: 'Hello, Backend CI/CD Pipeline!'});
});

app.get('/test', (req, res)=>{
    res.json({msg: 'Working with CI/CD Push'});
});

app.listen(4000);
