/**
 * Created by BaTmAn on 6/29/17.
 */
//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err){
        return console.log(`Couldnot connect to the server ${err}`)
    }
    console.log("App is Connected to the Mongodb Server");

    //1.Delete Many
    // db.collection('Todos').deleteMany({text : 'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    //})

    //2.Delete One
    // db.collection('Todos').deleteOne({text :'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // })

    //3.findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed : false}).then((result)=>{
    //     console.log(result);
    //     console.log(result.value.text);
    // })

    //deleteMany for Users Collection
    // db.collection('Users').deleteMany({name : "Revanth"}).then((result)=>{
    //     console.log(result);
    // })

    //findOneAndDelete for Users Collection
    db.collection('Users').findOneAndDelete({_id : new ObjectID('5953fcba8c5a805c09ae06c1')}).then((result)=>{
        console.log(result);
        console.log(result.value.name);
    })

});