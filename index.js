const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

app.use( express.static('build') );
app.use( express.json());
app.use(cors());

let submissions = [];

app.post('/submit', (req, res)=> {
  submissions.push(req.body);
  res.status(201).send('submitted');
})

app.get('/submissions', (req, res)=>{
  res.json(submissions);
})

app.listen(port, () => console.log(`example on port ${port}`));
