import mongoose from "mongoose";


const TaskModel = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true,
    },
    isDone : {
        type : Boolean,
        default : false
    },
    dueDate : {
        type : String,
    },
    category : {
        type : String,
        required : true,
    }
})

const taskModel = mongoose.model("task",TaskModel);

export default taskModel;