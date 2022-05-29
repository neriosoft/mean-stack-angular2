const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
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
app.use(express.static(__dirname + '/frontend/dist/frontend/'));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname + '/frontend/dist/frontend/index.html'));
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})