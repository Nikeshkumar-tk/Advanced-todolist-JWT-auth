const Todo = require('../models/todo')
const asyncHandler = require("express-async-handler")



//@desc getting all todos of the user
//@route /todos
//@method GET

const getAllTodos = asyncHandler(async(req, res) => {

    const {userId} = req.body
try{

    const todos = await Todo.find({userId: userId}).populate("userId")
    if(todos.length === 0){
        return res.status(200).json({message:"The user have no Todos"})
    }

    if(!todos){
        return res.status(500).json({message:"Something went wrong"})
    }

    return res.status(200).json({
        
        message:"User todos are:",
        userId:userId,
        todos:todos

})
}catch(err) {
    console.log(err)
}

})


//@desc   Creating todos of the user
//@route  /todos/create
//@method POST

const createTodos = asyncHandler( async (req, res) => {
    const {name, userId, description} = req.body

    const todo = await Todo.create({
        userId,
        name,
        description
    })

    if(!todo){
        return res.status(400).json({message:"Please provide adequate details"})
    }

    return res.status(200).json({
        name:todo.name,
        userId:todo.userId,
        description:todo.description

    })
})

//@desc Deleting a todo
//@method DELETE

const deleteTodo = asyncHandler(async (req, res) => {

    const {id} = req.body

    const todo = await Todo.findById(id)

    if(!todo){
        return res.status(500).json({message:"Todo doesn't exists"})
    }


    await todo.remove()
    return res.status(200).json({message:"Sucessfully deleted the todo"})


})


module.exports = {getAllTodos, createTodos, deleteTodo}