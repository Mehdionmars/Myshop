const express = require('express')
const app = express ()
const cors = require('cors')
app.get('/',(req,res)=>{
    res.send('Bonjour express')
})
//----------api------
app.use(express.json())
const router = require('./routes/router')
app.use(cors({
    origin:'http://localhost:3000',
    methods:'GET,POST,PUT,PATCH,DELETE,OPTIONS'
}))
app.use('/api',router)

module.exports = app