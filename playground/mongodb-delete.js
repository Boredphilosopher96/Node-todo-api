const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017' , (err , client) => {    
    if (err) {
        console.log("Unable to connect to mongoDB server");
    } else {
        var db = client.db('TodoApp');
        var ObjectId = require('mongodb').ObjectID;

        console.log("Connected to mongoDB server ");

        db.collection('Todo').findOneAndDelete({age : "22"}).then((result) => {
            console.log(result);
        });

        db.collection('Todo').deleteMany({age : "22"});

    }
    
    client.close();
});