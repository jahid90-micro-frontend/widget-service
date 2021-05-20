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
        content: {
            ssi: {
                link: '/nav/fragment/nav'
            },
            csi: {
                tag: 'mf-nav',
                link: '/nav/common/Nav.js'
            }
        }
    },
    'home': {
        id: 'home',
        content: {
            ssi: {
                link: '/home/fragment/home'
            },
            csi: {
                tag: 'mf-home',
                link: '/home/common/Home.js'
            }
        }
    },
    'footer': {
        id: 'footer',
        content: {
            ssi: {
                link: '/footer/fragment/footer'
            },
            csi: {
                tag: 'mf-footer',
                link: '/footer/common/Footer.js'
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
