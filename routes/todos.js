const todos=require('express').Router()
const jwt=require('jsonwebtoken')
const{validateToken}=require('../middleware/validation')
const {TODO}=require('../models/todo.model')
const ObjectID=require('mongoose').Types.ObjectId
//======================================================================================
todos.post('/add',validateToken,async(req,res)=>{
    let {title,body}=req.body
    console.log(title);
    if(title.length<1||body.length<1){
        res.status(406).json('Invalid ToDo content')
    }
    else{
        userId=res['id']
        let todo=await TODO({title,body,userId})
        await todo.save()
        res.status(200).json(todo);
    } 
})
//===============================================================
todos.get('/all',validateToken,async(req,res)=>{
    userId=res['id']
    let todos=await TODO.find({userId})
    console.log(todos);
    if (todos.length>=1){
        res.status(200).json(todos)
    }
    else{
        res.status(404).json("You do not have any todos")
    }
})
//=================================================================
todos.delete('/:id',validateToken,async(req,res)=>{
    let {id}=req.params
    id=new ObjectID(id)
    await TODO.deleteMany({_id:id})
    res.status(200).json("Deleted")
})
//=================================================================
todos.put('/:id',validateToken,async(req,res)=>{
    let {id}=req.params
    let {title,body,status,priority}=req.body
    id=new ObjectID(id)
    let todo=await TODO.findOne({_id:id})
    console.log(todo);
    todo.status=status
    todo.title=title
    todo.body=body
    todo.priority=priority
    todo.updated=Date.now()
    await todo.save()
    res.status(200).json(todo)
    
})




//===================================================================
module.exports={todos}