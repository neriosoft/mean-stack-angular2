const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/database');
const port = 8080;

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, error => {
    if (error) {
        console.log('Error in connection');
    }else {
        console.log('Connection to database established!')
    }
});
//console.log(config.secret);
app = express();

app.get('*', (req,res) => {
    res.send('Hello world');
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})