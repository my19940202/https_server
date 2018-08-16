var express = require('express');
var fs = require('fs');
var https = require('https');
var app = express();

app.get('/', function (req, res) {
    res.send('hello world')
})

app.use('/js', express.static('./public/js'));
app.use('/css', express.static('./public/css'));
app.use('/image', express.static('./public/image'));

let urls = `
    https://localhost:3000/js/test.js
    https://localhost:3000/css/style.css
    https://localhost:3000/image/test.jpg
`;


https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app)
.listen(3000, function () {
    console.log('Example app listening on port 3000! Go to ' + urls);
});
