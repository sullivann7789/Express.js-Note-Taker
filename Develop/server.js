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
app.post('/api/notes', (req, res) => {
  const { title, text } = req.body;
  if(req.body) {
    const addNote = {
      title,
      text,
    };
  
  fs.writeFile(db, JSON.stringify(addNote));
  res.json(db)
  } else {
    console.log(`error! res: ${res} `);
  }
  
}
)
app.post('/notes', (req, res) =>
    
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(3001, ()=>
console.log(`app listening at http://localhost:3001`));
