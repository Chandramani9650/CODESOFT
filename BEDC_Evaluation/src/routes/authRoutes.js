const express = require('express')

const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const {UserModel} = require('../models/User')
const authRouter = express.Router()

authRouter.post('/register', async (req, res)=>{
    const {name, email, password, role} = req.body
    try {
       
        const users = await UserModel.findOne({email})
        if(users){
            return res.json({msg:"user already exist"})
        }
        const hash = await bcrypt.hash(password, SALT_ROUND);
        const user = new UserModel({name, email, password:hash, role});
        await user.save();
        res.json({msg:"User Registration successful"})
    } catch (error) {
        res.status(404).json({msg:error})
    }
})




authRouter.post('/login', async (req, res)=>{

    const {email, password} = req.body

    try {
       const user = await UserModel.findOne({email});
       if(!user){
        return res.status(500).json({msg:"user not found"})
       } 
       const isMatch = await bcrypt.compare(password, user.password)
       if(!isMatch){
        return res.status(404).json({msg: "email or password not matched"})

       }

       const token = jwt.sign({id:user._id, role:user.role}, SECRET_KEY);
       res.json({msg:token, use})
    } catch (error) {
        res.status(404).json({msg: error})
    }
})

module.exports = {authRouter}