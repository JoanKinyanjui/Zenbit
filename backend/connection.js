const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Mypostgresspassword",
    database: "feedbackdb"
})

  
module.exports = client;



