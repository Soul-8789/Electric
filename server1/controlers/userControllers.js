const asyncHandler = require('express-async-handler') ;
const bcrypt = require('bcrypt') ;
const User = require('../models/userModel') ;
const jwt = require('jsonwebtoken') ;


const registerUser = asyncHandler(async (req, res) => {
      const {username, email, password} = req.body ;
      if(!username || !email || !password){
            res.status(400);
            throw new Error("All fields are mandatory!") ;
      }
      const userAvailable = await User.findOne({email}) ;
      if(userAvailable){
            res.status(400);
            throw new Error("User already available !") ;
      }
      //Hash password
      const hashPassword = await bcrypt.hash(password, 10) ;
      console.log(hashPassword);
      const user = await User.create({
            username,
            email,
            password: hashPassword,
      }) ;
      console.log(user);
      if(user){
            res.status(200).json({_id: user.id, email: user.email}) ;
      }else{
            res.status(400);
            throw new Error("User data is not valid") ;
      }

      res.json({message:"register the user"}) ;
    });

const loginUser = asyncHandler(async (req, res) => {
      const {email, password} = req.body;
      if(!email || !password){
            res.status(400) ;
            throw new Error("All fields are mandatory!!") ;
      }
      const user = await User.findOne({email}) ;
      //comparing both the password
      
      if(user &&(await bcrypt.compare(password, user.password))){
            // console.log('getting access');
            const accessToken = jwt.sign({
                  user:{
                        username: user.username,
                        email:user.email,
                        id:user.id,
                  },
            }, process.env.ACCESS_TOKEN_SECERET,
            {expiresIn:"1m"}
            ) ; 
            res.status(200).json({accessToken}) ;
      }else{
            res.status(401)
            throw new Error("Email and Password is not valid") ;
      }
    });

module.exports = {registerUser, loginUser} ;
