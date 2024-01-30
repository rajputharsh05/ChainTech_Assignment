import express from "express";
import { AddNewTaskToDataBase, DeleteTaskFromTheDataBase, GetAllTaskFromTheDataBase, GroupInCaterogy, UpdateAnTaskOfTheDataBase, UpdateIsDone } from "../controllers/TaskControllers.js";
const TaskRouter = express.Router();

TaskRouter.post("/add", AddNewTaskToDataBase)
TaskRouter.post("/delete", DeleteTaskFromTheDataBase)
TaskRouter.get("/tasks", GetAllTaskFromTheDataBase)
TaskRouter.post("/update", UpdateAnTaskOfTheDataBase)
TaskRouter.post("/updateIsDone", UpdateIsDone)
TaskRouter.get("/category", GroupInCaterogy)



export default TaskRouter;