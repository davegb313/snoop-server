const express = require('express');
const app = express();
const port = 4000;

app.use( express.static('build') );
app.use( express.json());

let submissions = [];

app.post('/submit', (req, res)=> {
  submissions.push(req.body);
  res.status(201).send('submitted');
})

app.get('/submissions', (req, res)=>{
  res.json(submissions);
})

app.listen(port, () => console.log(`example on port ${port}`));
