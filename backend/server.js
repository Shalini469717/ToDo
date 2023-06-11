// imports
let express = require("express")
let cors = require("cors")
let tasksRouter = require("./Routes/tasks")

// creating server using express
let app = express()

app.use(cors()) // for connecting with axios - else axios gives error
app.use(express.json()) // for parsing the data from json format
app.use(tasksRouter) // for REST API routing

app.listen(4000, ()=>{console.log("Server is running on port 4000")})