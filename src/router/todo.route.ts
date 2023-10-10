import * as express from 'express';
import {newTask, allTask,updateTask,deleteTask,getByID } from "../controller/todo.controller"
const router =  express.Router();

// End points

router.post("/add/task",newTask)
router.get("/getall",allTask)
router.post("/update/task",updateTask);
router.delete('/remove',deleteTask);
router.get('/get',getByID)


export default router;