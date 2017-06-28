/**
 * Created by BaTmAn on 6/29/17.
 */
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
   if (err){
       return console.log(`Error : ${err}`);
   }
   // db.collection('Todos').findOneAndUpdate({_id : new ObjectID('59541ca78c5a805c09ae14d8')},
   //     {$set : {
   //     completed : true}
   //     },{
   //     returnOriginal:false})
   //     .then((result)=>{
   //          console.log(result);
   // });

    db.collection('Users')
        .findOneAndUpdate({_id : new ObjectID('5953fcc98c5a805c09ae06cc')},
            {
                $set : {
                    name : 'ulfa'
                },

                $inc : {
                    age : 3
                }
            }, {returnOriginal : false}).then((result)=>{
                    console.log(result);
    });
    //db.close();
});