var express = require('express');
var router = express.Router();

var oracle = require('oracle');



var connectData = {
    hostname: "localhost",
    port: 1521,
    database: "xe", // System ID (SID)
    user: "oracle",
    password: "oracle"
};

oracle.connect(connectData, function(err, connection) {
    if (err) { console.log("Error connecting to db:", err); return; }

    connection.execute("SELECT systimestamp FROM dual", [], function(err, results) {
        if (err) { console.log("Error executing query:", err); return; }

        console.log(results);
        connection.close(); // call only when query is finished executing
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
