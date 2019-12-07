var mongo = require('mongodb');

var Server = mongo.Server,
Db = mongo.Db,
BSON = mongo.BSONPure();

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('careerdb', server);

db.open(function(err, db) {
    if (!err) {
        console.log("Connected to the career database. Through this scheduler, you can make appointments with educators on a variety of topics");
        db.collection('careers', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'career' database doesn't exist.");
                populateDB();
            }
        });
    }
});

