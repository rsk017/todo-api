/**
 * Created by BaTmAn on 6/29/17.
 */
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err){
        return console.log(`Coudnt connect to the server: ${err}`)
    }

     console.log("Connected to the server");
    // db.collection('Todos').find().count().then((count)=>{
    //     console.log("Todos");
    //     console.log(`Count is ${count}`);
    // });

    db.collection('Users').find({name : 'Tim'}).toArray().then((docs)=>{
        console.log('Users');
        console.log(JSON.stringify(docs,undefined,2));
        return db.collection('Users').find({name : 'Tim'}).count()
    }).then((count)=>{
        console.log(`Count is ${count}`);
    }).catch((err)=>{
        if (err){
            console.log(`Error occured ${err}`);
        }
    });


    //db.close();
});