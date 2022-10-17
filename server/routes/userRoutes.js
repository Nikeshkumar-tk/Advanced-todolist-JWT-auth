const router = require('express').Router()
const {registerUser, userLogin, getUser} = require('../controllers/userControllers')
const {protect} = require('../middlewares/authMiddleware')



router.post("/register",registerUser)
router.post("/login",userLogin)
router.get("/me", protect, getUser)


module.exports = router