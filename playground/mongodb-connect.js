const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017' , (err , client) => {    
    if (err) {
        console.log("Unable to connect to mongoDB server");
    } else {
        var db = client.db('TodoApp');
        var ObjectId = require('mongodb').ObjectID;

        console.log("Connected to mongoDB server ");

        // db.collection('Todo').findOneAndDelete({age : "22"}).then((result) => {
        //     console.log(result);
        // });

        // db.collection('Todo').deleteMany({age : "22"});

        // db.collection('Todo').find()
        // .count()
        // .then((count) => {
        //     console.log("Todos count is "+count);
        // }, (err) => {
        //     console.log('Unable to count Todos');
        // });

        // db.collection('Todo').find({name: 'Sumukh'}).toArray().then((docs) => {
        //     console.log('This is some data');
        //     console.log(JSON.stringify(docs , undefined , 2));
        // }, (err) => {
        //     console.log("Error retreiving your data for you");
        // });
        

        // db.collection('Todo').find({_id : ObjectId("5ad0f60533d85a363ca083bb")})
        // .toArray()
        // .then((docs) => {
        //     console.log('Todos');
        //     console.log(JSON.stringify(docs, undefined , 2));
        // }, (err) => {
        //     console.log('Unable to fetch th file');
        // });

        db.collection('Todo').insertOne({
            name : 'Sumukh',
            age : '22'
        }, (err , result) => {
            if (err) {
                console.log('Error writing');
            }else{
                console.log(JSON.stringify(result.ops, null , 2)); 
            }
        });

        // db.collection('Progress').insertOne({
        //     task : 'learning mongoDB',
        //     level : '1'
        // }, (err , result) => {
        //     if (err) {
        //         console.log("Error adding entry 2");
        //     } else {
        //         console.log(JSON.stringify(result.ops[0]._id.getTimestamp() , null , 2));
        //     }
            
        // });
    }
    
    client.close();
});