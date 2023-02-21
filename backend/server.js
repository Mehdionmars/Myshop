const app = require('./app')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'./backend/config/config.env'})
mongoose.set('strictQuery',false);
const myport = process.env.PORT
//-------la connexion---------
const DB =process.env.db_con
mongoose.connect(DB, ()=>console.log('Database connected'))
app.listen(myport, ()=>console.log('server is running on ${myport}'))
