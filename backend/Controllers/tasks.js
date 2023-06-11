const Tasks = require("../Models/tasks")

exports.createNewTask = async(req,res) => {
    const task = req.body
    Tasks.create(task)
    res.status(200).json({
        success : true,
        task
    })
}

exports.getAllTasks = async(req,res) => {
    const tasks = await Tasks.find()
    console.log(tasks)
    res.status(200).json({
        success: true,
        tasks
    })
}

exports.updateTask = async(req,res) => {
    let task = await Tasks.findById(req.params.id)
    if(!task){
        return res.status(500)
    }
    task = await Tasks.findByIdAndUpdate(req.params.id,req.body,{new:true, useFindAndModify: true, runValidators:true})

    res.status(200).json({success:true, task})
}

exports.deleteTask = async(req,res) => {
    const task = await Tasks.deleteOne({_id:req.params.id});
    if (task.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
    res.status(200).json({success:true, task})
}