/**
 * Created by BaTmAn on 7/1/17.
 */
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/TodoApp");

module.exports = {mongoose};