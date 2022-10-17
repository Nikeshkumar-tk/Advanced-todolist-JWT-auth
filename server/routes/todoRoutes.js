const router = require('express').Router()
const {getAllTodos, createTodos, deleteTodo} = require("../controllers/todoController")
const {protect} = require('../middlewares/authMiddleware')


router.route("/todos")
.get(protect, getAllTodos)
.post(protect, createTodos)
.delete(protect, deleteTodo)


module.exports = router