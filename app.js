const express = require('express'); 

const app = express();

app.get('/', (req, res)=>{
    res.json({msg: 'Hello, Backend CI/CD Pipeline!'});
});

app.listen(4000);