var express = require('express');
var app = express();
var dotenv = require('dotenv').config();
var bodyParser = require('body-parser');
// var session = require('express-session');
// var MongoStore = require('connect-mongo')(session);

// var db = require('./config/database');

const PORT = process.env.BMI_HTTP_PORT || 5000;

/*
    Session configuration
 */
// app.use(session({
//     secret: 'work hard',
//     resave: true,
//     saveUninitialized: false,
//     store: new MongoStore({
//         mongooseConnection: db
//     })
// }));

/*
    Parse incoming requests
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


/*
    Initialize routes
 */

var routes = require('./routes/index');
app.use('/api', routes);

// serve static files from template
app.use(express.static(__dirname + '/templateLogReg'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
});

// define as the last app.use callback
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

app.listen(PORT, function () {
    console.log('Express app listening on port ' + PORT);
});