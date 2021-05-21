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

    res.json({
        widget: metadata[req.body.widgetId]
    });

});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is up and running at port: ${port}`);
});
