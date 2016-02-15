var app = require('express')(),
    port = 1993,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

mongoose.connect('localhost:27017/fromto');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/', require('./routes/user.js'));
app.use('/', require('./routes/place.js'));
//app.use('/', require('./routes/dish-route.js'));
//app.use('/', require('./routes/dish-property-route.js'));

app.listen(port);
console.log('Listening port ' + port);