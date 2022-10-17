const asyncHandler = require('express-async-handler')
const User = require("../models/user")
const bcrypt = require('bcrypt') 
const generateToken = require('../configs/jwt')


//@desc creating new user
//@method POST
//@acess private
const registerUser = asyncHandler(async(req, res) => {

    const {password, username, email} = req.body

    //checking the duplication of users

    const duplicate = await User.findOne({email:email})

    if(duplicate){

      return  res.status(401).json({message:"This email already exists"})

    }

//hashing the password using bcrypt or new user creation

const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt)


    const userObj = {
        username,
        password:hashedPassword,
        email,
        
    }
    
const user = await User.create(userObj)
  
        
    
    if(user){

        res.status(200).json({
            message: `New user with username ${user.username} is created`,
            password:user.password,
            token:generateToken(user._id)
        
        })
    }else{
        res.status(500).json({message:"Failed to create new user check the given details",
      
    })
    }


})

//@desc login of user
//@method POST

const userLogin = asyncHandler(async(req, res) => {

const {email, password} = req.body
try{
const user = await User.findOne({email:email})

if(!user){
    return res.status(400).json({message:"This email id is not registered"})
}
const valiadatePassword = await bcrypt.compare(password, user.password)

    if(valiadatePassword){
        return res.status(200).json({
            username:user.username,
            email:user.email,
            token:generateToken(user._id)


        })
    }

}catch(err){
    console.log(err)
}

})

const getUser = asyncHandler(async(req, res) => {

    res.json({message:"Hello user authenticated successfully"})


})



module.exports = {registerUser, userLogin, getUser}