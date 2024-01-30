import taskModel from "../models/taskModel.js";
import ApiError from "../utils/ApiErrors.js";


const AddNewTaskToDataBase = async (req, res) => {

   try {

     const { name , desc , category } = req.body;
 
     const NewTaskForTheDataBase = new taskModel(
         {
             name,
             desc,
             category,
             desc : req.body.dueDate?req.body.dueDate : ""
         }
     )
 
     await NewTaskForTheDataBase.save();

     res.json("User Added")

   } catch (error) {

        throw new ApiError(401 , "can't insert into the database due to missing fields .");

   }

}


const DeleteTaskFromTheDataBase = async (req, res) => {
    try {

      const { _id } = req.body;

      console.log(_id);
      
      if( !_id ) {
        throw new ApiError(401 , "Invalid task request");
      }

      const response = await taskModel.findByIdAndDelete({_id});
      

      res.json("Task Deleted successfully .");

    } catch ( error ) {

        console.log(error)

        throw new ApiError("500" , "Something Went Wrong");

    }
}


const GetAllTaskFromTheDataBase = async (req , res) => {
    try{

        const AllTaskFromTheDataBase = await taskModel.find();

        console.log(AllTaskFromTheDataBase);

        res.json(AllTaskFromTheDataBase)


    } catch ( error ) {
        throw new ApiError(500 , "Something went wrong so that files cant be fetched from database " , error);
    }
}


const UpdateAnTaskOfTheDataBase = async (req , res) => {


   try {
     
       const { _id , content} = req.body;
 
 
       await taskModel.findOneAndUpdate({_id}, {
         desc : content
       })
 
 
       res.json("Task Updated")

   } catch (error) {

        throw new ApiError(400 , "Can't Update the information",error);
   }
}

const UpdateIsDone = async ( req, res) => {

    try {

        const { _id , currentValue } = req.body;

        await taskModel.findOneAndUpdate({_id}, {
            isDone : currentValue
          })

          res.json("Updated .")

    }catch( error ) {

        throw new ApiError("404" , "Can't update the isDone value .")

    }
}


const GroupInCaterogy = async ( req , res ) => {

   try {
     const Data = await taskModel.aggregate([
         {
             $group : {
                 _id : "$category",
                 tasks : {$push: '$$ROOT'}
             }
         },
         {
             $project: {
                 _id:0,
                 caterogy: '$_id',
                 tasks: 1
             }
         }
     ])

     console.log(Data);

     res.json(Data);

   } catch (error) {
    
        throw new ApiError(400 , "Internal Server Error" ,error)

   }
    
}

export { 

    AddNewTaskToDataBase,
    DeleteTaskFromTheDataBase,
    GetAllTaskFromTheDataBase,
    UpdateAnTaskOfTheDataBase,
    UpdateIsDone,
    GroupInCaterogy,

}