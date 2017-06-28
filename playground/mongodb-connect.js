/**
 * Created by BaTmAn on 6/27/17.
 */
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
   if (err){
       return console.log("Could not connect to the server");
   }
   console.log("Connection to the server succesful");
   // db.collection('Todos').insertOne({
   //     text : 'Something',
   //     completed : false
   // },(err,result)=>{
   //     if (err){
   //         return console.log("Error: " + err);
   //     }
   //     console.log(JSON.stringify(result.ops,undefined,2));
   // });

    // db.collection('Users').insertOne({
    //     name : 'Revanth',
    //     age : 25,
    //     location : 'Hyderabad'
    // },(err,result)=>{
    //     if(err){
    //         return console.log("Error Message:" + err)
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2))
    // });

   db.close();
});