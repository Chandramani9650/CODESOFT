const express = require('express')
const multer = require('multer')

const {UserModel} = require('../models/User')
const {authMiddleware, roleMiddleware} = require('../middleware/authMiddleware')
const userRoute = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/uploads/')
    },
    filename: function (req, file, cb) {
     
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
//get all user
  userRoute.get('/', authMiddleware, roleMiddleware(['admin']), async (req, res)=>{
    const users = await UserModel.find()
    res.json(users)

  })

  //add user

  //update profile
userRoute.put('/update', authMiddleware, upload.single('picture'), async(req, res)=>{
    const {name} = req.body
    const pict = req.file?req.file.path:undefined;
    const updatedata = {name, ...UserModel(pict && {pict})}
    try {
       const user = await UserModel.findByIdAndUpdate(req.user.id, updatedata, {new:true})
       res.json(user) 
    } catch (error) {
        res.json({msg: error})
    }

})

userRoute.get('/my', authMiddleware, async (req, res)=>{

    const user = await UserModel.findById(req.user.id)
    res.json(user)
})
// delete profile
userRoute.put('/updatedelete', authMiddleware, async(req, res)=>{
   
    try {
       const user = await UserModel.findByIdAndDelete(req.user.id)
       res.json(user) 
    } catch (error) {
        res.json({msg: error})
    }

})

module.exports = {userRoute}