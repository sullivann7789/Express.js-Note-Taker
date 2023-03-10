const express = require('express');
const path = require('path');
var addTheData = [];

const PORT = process.env.PORT || 3001;
//const { getNotes } = require('./public/assets/js/index')
const db = require('./db/db.json');
const fs = require('fs');
//const notes = require('./public/assets/js/index.js');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
//app.use('/notes', notes);

app.get('/notes', (req, res) => 
  //getNotes(db),
  //req.json(db),
  res.sendFile(path.join(__dirname, '/public/notes.html'))
  
);
app.post('/api/notes', (req, res) => {
  var { id, title, text } = req.body;
  if(req.body) {
    var addNote = {
      id,
      title,
      text,
    };
  //console.log(JSON.stringify(req.body));
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if(err){
        console.log(`Should produce error result: ${err}`)
      }else{
    addTheData = JSON.parse(data);
    addTheData.push(addNote);
    console.log(`this is the data output: ${JSON.stringify(addTheData)}`);

    console.log("outside the function scope: " + JSON.stringify(addTheData));
    fs.writeFile('./db/db.json', `${JSON.stringify(addTheData)}`, (err) => {
    console.log(`the err code says: ${err}`);
    res.json(db)
  });
  
}
})
  } else {
    console.log(`error! res: ${res} `);
  }
  
}
)
app.get('/api/notes', (req, res) =>
  res.json(db)
)
app.post('/notes', (req, res) =>
    
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);
app.delete(`/api/notes`, (req, res) =>
console.log(req)
  //fs.writeFile('./db/db.json', )
);
app.listen(PORT, ()=>
console.log(`app listening at http://localhost:3001`));
