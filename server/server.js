/**
 * Created by BaTmAn on 6/30/17.
 */
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');


const {mongoose} = require('./db/mongoose.js');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text : req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
        res.status(400).send(err);
    })
});

// This is used to return all the todos. Any todo app will require a get Todo as the first screen you will show the user is the list of all the todos
app.get('/todos',(req,res)=>{
   Todo.find().then((todos)=>{
        res.send({todos});
   },(e)=>{
        res.status(400).send(e);
   });
});

//GET /todos/123453233

app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectId.isValid(id)){
       return res.status(400).send();
    }
    Todo.findById(id).then((todo)=>{
        if (!todo){
           return res.status(404).send();
        }
        res.send({todo});
    }).catch((err)=>{
        res.status(500).send();
    })
});

app.listen(3000,()=>{
    console.log('Started on port 3000');
});

module.exports = {app};


