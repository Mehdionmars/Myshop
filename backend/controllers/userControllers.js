let User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwb = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config({path:'../config/config.env'})
exports.register = async (req,res)=>{
    const email = await User.findOne({email: req.body.email})
    if(email) return res.status(401).send('Email exists!')
    /////------Hachage----------
    const salt = await bcrypt.genSalt(5)
    const pwdHash = await bcrypt.hash(req.body.password,salt)
    //------------------------------
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: pwdHash
    })
    try{
        await user.save()
        res.status(200).json({
            "success": "user saved successfully !",
            "user": user
        })
    }catch(err){
        console.error(err)
    }
}

exports.login = async (req,res)=>{
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('user not found!')   
    //----------------------------
    const verif = await bcrypt.compare(req.body.password, user.password)
    if (!verif) return res.status(400).send('password incorrect!')
    //-----------------------------
     const token = jwt.sign({_id:user._id},process.env.SECRET_TOKEN,{expireIn:'3600s'})
     res.header('auth-token',token).send(token)
}
//-----------------test----
exports.test = async (res, req) => {
    res.status(200).json({
        "success":"Accés autorisé"
    })
}