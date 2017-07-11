/**
 * Created by BaTmAn on 7/1/17.
 */
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://reva7:Revanth307@ds023644.mlab.com:23644/revanth-todo-app" || "mongodb://localhost:27017/TodoApp");

module.exports = {mongoose};