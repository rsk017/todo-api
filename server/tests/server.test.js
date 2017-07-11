/**
 * Created by BaTmAn on 7/1/17.
 */
const expect = require('expect');
const request = require('supertest');
const {ObjectId} = require('mongodb');


const app = require('./../server').app;
//const {app} =require('./../server');
const Todo = require('./../models/todo').Todo;
//const {Todo} = require('./../server');

const todos = [{
    _id: new ObjectId(),
   text: "first test todo"
},{
    _id : new ObjectId(),
    text : "second test todo"
}];

beforeEach((done)=>{
    Todo.remove({}).then(()=>{
       return Todo.insertMany(todos);
    }).then(()=>{
        done();
    })
});

describe('POST/todos',()=>{
    it('Should Create a new Todo',(done)=>{
        var text = 'Test todo text';
        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res)=>{
                expect(res.body.text).toBe(text);
            })
        .end((err,res)=>{
            if(err){
                return done(err);
            }

            Todo.find({text}).then((todos)=>{
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((err)=>{
                done(err);
            })
        });
    });

    it('Should not create a new Todo with invalid body data',(done)=>{
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err,res)=>{
                if (err){
                    return done(err);
                }

                Todo.find().then((todos)=>{
                    expect(todos.length).toBe(2);
                    done();
                }).catch((err)=>{
                    done(err);
                });
            });

    });

    describe('GET/todos',()=>{
       it('Should Get all todos', (done)=>{
           request(app)
               .get('/todos')
               .expect(200)
               .expect((res)=>{
                    expect(res.body.todos.length).toBe(2);
               })
               .end(done);

       })
    });

    describe('GET/todos/:id',()=>{
       it('should Get todo for the specific id',(done)=>{
           request(app)
               .get(`/todos/${todos[0]._id.toHexString()}`)
               .expect(200)
               .expect((res)=>{
                    expect(res.body.todo.text).toBe(todos[0].text)
               })
            .end(done);
       });

       it("Should return a 404 if todo is not found",(done)=>{
           request(app)
               .get(`/todos/${new ObjectId().toHexString()}`)
               .expect(404)
               .end(done);
       });

       it("Should return a 400 for non object Id",(done)=>{
            request(app)
                .get(`/todos/123`)
                .expect(400)
                .end(done);
       });
    });


});