const express = require('express');
// const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const scrape = require('website-scraper');
const zipFolder = require('zip-folder');
const next = require('./next');

const app = express();
// Put in place textbook middlewares for express.
if (process.env.NODE_ENV !== 'production') {
    // app.use(logger('dev'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'public')));

const start = async (port) => {
    // Couple Next.js with our express server.
    // app and handle from "next" will now be available as req.app and req.handle.
    await next(app);

    // Normal routing, if you need it.
    // Use your SSR logic here.
    // Even if you don't do explicit routing the pages inside app/pages
    // will still get rendered as per their normal route.
    app.get('/main', (req, res) => req.app.render(req, res, '/', {
        routeParam: req.params.routeParam
    }));

    app.post('/scrape_url', (req, res) => {
        const scrapeUrl = req.body.url;
        if (!scrapeUrl) {
            return res.status(500).send('Please provide a valid URL');
        }
        const folderName = (new Date()).getTime();
        const options = {
            urls: [scrapeUrl],
            directory: `tmp/${folderName}`,
        }

        console.log(options);

        scrape(options).then((result) => {
            const zipFile = `./tmp/${folderName}.zip`;
            zipFolder(options.directory, zipFile, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send('zip file failed');
                } else {
                    return res.download(zipFile);
                }
            })
        }).catch((err) => {
            console.log(err);
            return res.status(500).send('zip file failed');
        });
    });

    app.listen(port);
};

// Start the express server.
start(9001);
