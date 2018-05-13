const {ObjectID} = require('mongodb');

const {mongoose} = require('./../db/mongoose');
const {Todo} = require('./../model/todo');

id = '5aef34ab0c72d826c49b4356111';
// if(!ObjectID.isValid(id)){
//     console.log('ID is not valid');
// }

// Todo.find({
//     _id: id
// }).then((docs) => {
//     console.log('Todos', docs);
// });

// Todo.findOne({
//     _id: id
// }).then((docs) => {
//     if(!docs){
//         console.log('Id not found');
//     }
//     console.log('Todo', docs);
// });

Todo.findById(id).then((docs) => {
    console.log('Todo by Id', docs);
}).catch((e) => {
    console.log('Error', e.message);
});