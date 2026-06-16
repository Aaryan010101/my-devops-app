const express = require('express');
const app = express();   //express() matlab express tool start kar

app.get('/hello', (req,res) => {
    res.json({message: 'Hello from DevOps!', version: '1.0'});
});

app.listen(3000, () => {
    console.log('App chal rahi hai port 3000 pe');
});