const express = require('express');
const {createTodo} = require('/types');
const { createPrivateKey } = require('crypto');
// Create an instance of express
const app = express();

// Define a port number
const port = 3000;
app.use(express.json());

app.post('/todo', function(req ,res) => {

  const createPayload =req.body ; 
  const parseayload = createTodo.safeParse(createPayload) ;
})

app.get('/todo', function(req, res) => {
})



app.put('/completed',function(req,res) {

})