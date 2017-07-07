/**
 * Created by BaTmAn on 7/1/17.
 */
const expect = require('expect');
const request = require('supertest');


const app = require('./../server').app;
//const {app} =require('./../server');
const Todo = require('./../models/todo').Todo;
//const {Todo} = require('./../server');

beforeEach((done)=>{
    Todo.remove({}).then(()=>{
        done();
    });
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

            Todo.find().then((todos)=>{
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
            });

            Todo.find().then((todos)=>{
                expect(todos.length).toBe(0);
                done();
            }).catch((err)=>{
                done(err);
            })
    })
});