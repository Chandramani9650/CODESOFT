const jwt = require('jsonwebtoken')
require('dotenv').config()

const authMiddleware = (req, res, next)=>{
    const token = req.header('Authorization')
    if(!token){
        return res.status(404).json({msg: "Asccess denied"})
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        req.user = decoded
        next()
    } catch (error) {
        return res.status(404).json({msg: "Invalid token"})
    }
}
const roleMiddleware = (role)=>(req, res, next)=>{

    if(!role.includes(req.user.role)){
        return res.status(404).json({msg: "access denied"})
    }
    next()
}

module.exports = {authMiddleware, roleMiddleware}