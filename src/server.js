const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const { trace } = require('@jahiduls/lib-tracing');

const { metadata } = require('./config/data');

// Create the server
const app = express();

// Configuration
app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res) => {

    const response = tracedFetchMetadata(req.body.widgetId);

    console.log(`Request: {widgetId: ${req.body.widgetId}}`);
    console.debug(`Response: ${JSON.stringify(response)}`)

    res.json({
        widget: response
    });

});

const fetchMetadata = (widgetId) => metadata[widgetId];
const tracedFetchMetadata = trace(fetchMetadata, 'fetch-widget-metadata');

module.exports = app;
