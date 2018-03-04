var mongoose = require('mongoose');

var dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME
};

var connectionString = "mongodb://" + dbConfig.host + ":" + dbConfig.port + "/" + dbConfig.name;

mongoose.connect(connectionString);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    // we're connected!
});


module.exports = db;

