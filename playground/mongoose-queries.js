const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '5964a95bd95f02389e2e08e3';

// if(!ObjectId.isValid(id)){
//     console.log("ID not valid")
// }
//
// Todo.findById(id).then((todo)=>{
//     if (!todo){
//        return console.log("User name not found");
//     }
//     console.log('todo',todo);
//
// },(e)=>{
//     console.log(e);
// });

var id = '59564ee953a240345fd4b145';


User.findById(id).then((user)=>{
   if(!user){
       return console.log("User Id not found");
   }
   console.log(JSON.stringify(user,undefined,2));
}).catch((e)=>{
   console.log("Error",e);
});