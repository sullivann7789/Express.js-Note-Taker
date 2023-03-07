const express = require('express');
const path = require('path');
//const { getNotes } = require('./public/assets/js/index')
const db = require('./db/db.json');
const fs = require('fs');
//const notes = require('./public/assets/js/index.js');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
//app.use('/notes', notes);
app.get('/api/notes', (req, res) =>
  res.json(db)
)
app.get('/notes', (req, res) => 
  //getNotes(db),
  //req.json(db),
  res.sendFile(path.join(__dirname, '/public/notes.html'))
  
);

app.post('/notes', (req, res) =>
    res.json(db)
);

app.listen(3001, ()=>
console.log(`app listening at http://localhost:3001`));
