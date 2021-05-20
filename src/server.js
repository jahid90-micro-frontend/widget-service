const bodyParser = require('body-parser');
const express = require('express');

// Create the server
const app = express();

// Configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const metadata = {
    'nav': {
        id: 'nav',
        assets: {
            scripts: [
                '/nav/script.js'
            ],
            styles: [
                '/nav/style.css'
            ]
        },
        content: {
            ssi: {
                link: '/nav/fragment/nav'
            },
            csi: {
                tag: 'mf-nav',
                link: '/nav/component/nav'
            }
        }
    },
    'footer': {
        id: 'footer',
        assets: {
            scripts: [
                '/footer/script.js'
            ],
            styles: [
                '/footer/style.css'
            ]
        },
        content: {
            ssi: {
                link: '/footer/fragment/footer'
            },
            csi: {
                tag: 'mf-footer',
                link: '/footer/component/footer'
            }
        }
    }
};

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
