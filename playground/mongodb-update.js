//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //Object Desctructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //findOneAndUpdate -- Updates document and returns value
    db.collection('Todos').findOneAndUpdate({
        _id: ObjectID("5aef12c7425cb0ee34ec6d36")
    },{
        $set: {
            completed: true
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
});

