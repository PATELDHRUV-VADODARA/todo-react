const mongoose = require('mongoose');
const { todo } = require('node:test');
const { string, boolean } = require('zod');

mongoose.connect('mongodb+srv://dhruv34133:< MxOK5zFyHPLo9egW>@todoapp.algsyax.mongodb.net/');
const todoSchema = mongoose.Schema({
    title : string,
    description : string,
    completed : boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo
}