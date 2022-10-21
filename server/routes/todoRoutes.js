const router = require('express').Router()
const {getAllTodos, createTodos, deleteTodo} = require("../controllers/todoController")
const {protect} = require('../middlewares/authMiddleware')


router.route("/todos")
.post(protect, getAllTodos)
.delete(protect, deleteTodo)

router.post("/todos/create",protect, createTodos)


module.exports = router