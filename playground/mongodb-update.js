const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017' , (err , client) => {    
    if (err) {
        console.log("Unable to connect to mongoDB server");
    } else {
        var db = client.db('TodoApp');
        var ObjectId = require('mongodb').ObjectID;

        console.log("Connected to mongoDB server ");
        
        db.collection('Todo').findOneAndUpdate({ 
            _id : ObjectId("5ad7272d96792e27287e5e4d")
    },{
         $set : {
             age : "18"
         }
    }, {
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    });

        client.close();
    }
});