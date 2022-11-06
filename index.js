const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('Hello from node mongo crud server');
})

app.listen(port, ()=>{
    console.log(`listinting to potr ${port}`);
})