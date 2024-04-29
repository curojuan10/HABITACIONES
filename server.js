const express = require ("express");

const app = express();

const bdConfig = require('./bd')

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log('Corriendo desde el porto manuel wey ▼'));
