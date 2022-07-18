const express = require('express');
const app = express();
const cors = require('cors');
 const bodyParser = require("body-parser");
const client = require('./connection.js')
const port = process.env.PORT|| 3000;
const build= require('../build')

app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, build)));

//Connect to Database
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected! to Postgres feedback database");
  });


app.get('/users', (req, res)=>{
    client.query(`Select * from usersfeedback`, (err, result)=>{
        if(!err){
            console.log(result.rows);
            res.json(result.rows)
        }
    });
    client.end;
})

app.post('/users', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into usersfeedback(name, email, message) 
                       values('${user.name}', '${user.email}', '${user.message}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})



