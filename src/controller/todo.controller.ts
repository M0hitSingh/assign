import { NextFunction, Request, RequestHandler, Response } from "express";
import asyncWrapper from "../middleware/asyncWrapper";
import { sendSuccessApiResponse } from "../middleware/successApiResponse";
import { createCustomError, customAPIError } from "../errors/customAPIError";
import Todo from '../model/todo'

// using Asyncwrapper to make clean code with error handling

// creating New Task
const newTask : RequestHandler = asyncWrapper(async (req:Request , res :Response , next : NextFunction)=>{        
    const {task} = req.body;
    await Todo.create({task:task})
    const responce = sendSuccessApiResponse("Task Created",200);
    res.json(responce);
})


// get all task
const allTask : RequestHandler = asyncWrapper(async (req:Request , res :Response , next : NextFunction)=>{
    const user = await Todo.findAll({});
    res.json(sendSuccessApiResponse(user,200));
})

// get task by ID
const getByID : RequestHandler = asyncWrapper(async (req:Request , res :Response , next : NextFunction)=>{
    const id = req.query.id;
    const data = await Todo.findAll({where:{id:id}});
    res.json(sendSuccessApiResponse(data,200));
})


// Update Task by Id
const updateTask : RequestHandler = asyncWrapper(async (req:Request , res :Response , next : NextFunction)=>{
    const id = req.body.id;
    const task = req.body.task;
    const data = await Todo.findOne({where:{id:id}})
    await data.update({task:task})
    res.json(sendSuccessApiResponse(data,200));
})


// remove task by id
const deleteTask : RequestHandler = asyncWrapper(async (req:Request , res :Response , next : NextFunction)=>{
    const id = req.query.id;
    const data = await Todo.destroy({where:{id:id}})
    res.json(sendSuccessApiResponse("Task removed",200));
})
export {
    newTask,
    allTask,
    updateTask,
    deleteTask,
    getByID
}