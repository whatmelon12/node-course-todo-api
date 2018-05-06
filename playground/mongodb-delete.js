//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //Object Desctructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('User').findOneAndDelete({_id: new ObjectID("5aef1470425cb0ee34ec6d8d")}).then((result) =>{
        console.log(result);
    });
});

