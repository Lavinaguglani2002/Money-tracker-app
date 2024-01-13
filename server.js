const express=require('express')
const cors=require('cors')
const colors=require('colors')
const dotenv=require('dotenv')
const app=express()
const path = require('path')
const connectDb = require('./config/db');
connectDb();
dotenv.config();
//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/api/v1/users',require('./routes/userRoutes'))
//transaction routes
app.use('/api/v1/transactions',require('./routes/transactionRoutes'))
 
app.use(express.static(path.join(__dirname,'./client/build')))
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})
//port
const PORT=8080|| process.env.PORT
//LISTEN
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})