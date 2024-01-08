const express = require('express');
const {createTodo} = require('/types');
const { createPrivateKey } = require('crypto');
const {todo} = require('./db');
const { create } = require('domain');
// Create an instance of express
const app = express();

// Define a port number
const port = 3000;
app.use(express.json());

app.post('/todo', async function(req, res) {
    const createPayload = req.body;
    const parseResult = createTodo.safeParse(createPayload);
  
    if (!parseResult.success) {
      return res.status(400).json({ error: 'Invalid todo data' });
    }

    await todo.create({
        title : createPayload.title,
        description : createPayload.description,

    })

    res.json({
        msg: "Todo created "
    })
});


app.get('/todo', async function(req, res) {
 const todo =  await todo.find({});
 
 res.json({
      todos
 })
})



app.put('/completed', async function(req,res) {
    const updatePayload = req.body;
    const parseResult = createTodo.safeParse(updatePayload);
    if (!parseResult.success) {
        return res.status(400).json({ error: 'Invalid todo data' });
      }

      await onkeydown.upadate({
        _id : req.body.id
      },{
        completed : true
      })
      res.json({
        msg:"Todo marked as completed "
      })

  });

//   MxOK5zFyHPLo9egW mongodb+srv://dhruv34133:<password>@todoapp.algsyax.mongodb.net/