const bodyParser = require('body-parser');
const express = require('express');

// Create the server
const app = express();

// Configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    
    res.json({
        widget: {
            id: req.body.widgetId,
            assets: [
                '/nav/script.js',
                '/nav/style.css'
            ],
            content: {
                ssi: {
                    link: '/nav/fragment/nav'
                },
                client: {
                    tag: 'mf-nav',
                    link: '/nav/component/nav'
                }
            }
        }
    });

});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is up and running at port: ${port}`);
});

