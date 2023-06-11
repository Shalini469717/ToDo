// This file is for providing routes to the REST API

let express = require("express");
let router = express.Router(); //router
let {getAllTasks,createNewTask,updateTask,deleteTask} = require("../Controllers/tasks")
// /api/v1 means api's version1

//routes of CRUD operations
router.route('/api/v1/tasks/all').get(getAllTasks);
router.route('/api/v1/tasks/new').post(createNewTask);
router.route('/api/v1/tasks/update/:id').put(updateTask);
router.route('/api/v1/tasks/delete/:id').delete(deleteTask);

module.exports = router


//Test using postman