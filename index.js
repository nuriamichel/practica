const express = require('express');

const app = express();

app.get('/',(req,res)=>{
  
    res.send('Hola Mundo');
});

app.listen(3030,()=>{
    console.log('servidor express')
});