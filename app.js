var express = require('express');
var app = express();
let path = require('path');

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/' + 'pages/index.html', function(err) {
        if (err) {
            console.log(err);
            res.status(err.status).send();
        } else {
            console.log('sent:', './pages/index.html');
        }
    });
});

app.post("/", function(req, res) {
    res.send('Got a POST request');
});

app.get("/user", function(req, res) {
    res.send('This is user page!!!!')
})

app.put("/user", function(req, res) {
    res.send('Got a PUT request');
});

app.delete("/user", function(req, res) {
    res.send('Got a DELETE request');
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

app.use(express.static('public'));