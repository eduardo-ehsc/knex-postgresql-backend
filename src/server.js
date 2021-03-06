const express = require('express');
const routes = require('./routes');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(routes);

//Not Found
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

//Catch All
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({error: error.message});
})


const port = process.env.PORT || 3337;

app.listen(port, () => {
    console.log('Servidor rodando...')
})