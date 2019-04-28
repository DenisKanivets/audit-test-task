const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const request = require('request');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build")));

app.get('/get-info', (req, res) => {
    request('https://www.googleapis.com/pagespeedonline/v5/runPagespeed/?url=https://habr.com/', (error, response, body) => {
        if (!error && response.statusCode === 200) {
            let info = JSON.parse(body);
            info = Object.values(info.lighthouseResult.audits);
            let data = [];
            info.forEach(item => {
                if (item.displayValue) {
                    data.push(item)
                }
            });
            res.send(data);
        }
    })
});

const port = process.env.PORT || 9000;
let server = app.listen(port, () =>
    console.log(`We are living on port ${port}`)
);

module.exports = server;