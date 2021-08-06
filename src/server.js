const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const { metadata } = require('./data.js');

// Create the server
const app = express();

// Configuration
app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res) => {

    const response = metadata[req.body.widgetId];

    console.log(`Request: {widgetId: ${req.body.widgetId}}`);
    console.debug(`Response: ${JSON.stringify(response)}`)

    res.json({
        widget: response
    });

});

module.exports = app;
