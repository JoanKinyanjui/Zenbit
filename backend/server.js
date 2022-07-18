const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const client = require('./connection.js')
const port = process.env.PORT|| 3000;
var path = require('path');
let build = 'build';

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..',build)));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '..',build  + 'index.html'))
})

app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})


//CONNECTING TO THE DATABASE
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected! to Postgres feedback database");
  });

//FETCHING USER'S DATA FROM DATABASE
app.get('/users', (req, res)=>{
    client.query(`Select * from usersfeedback`, (err, result)=>{
        if(!err){
            console.log(result.rows);
            res.json(result.rows)
        }
    });
    client.end;
})

//POSTING USER'S DATA TO THE DATABASE
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



