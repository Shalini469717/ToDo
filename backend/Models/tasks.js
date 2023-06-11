// This file is for the schema of the tasks in the ToDoList database
// For now using it for connection also

// mongoDB connection
let mongoose = require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/ToDoList",{useNewUrlParser:true, useUnifiedTopology:true, }).then((data) => {
console.log("Connected to DB")}).catch((err) => {console.log(err)})

// Schema of Task
const taskSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true,"Task can't be empty"]
    },
    status : {
        type : Boolean,
        default : false
    }
})

// Task model
let Tasks = mongoose.model("Tasks",taskSchema)

module.exports = Tasks