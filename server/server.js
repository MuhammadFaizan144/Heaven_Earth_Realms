require('dotenv').config()
const express=require('express')
const app=express()
const router=require('./router/auth-router')
const connectDB=require('')
app.use('/api/auth',router)
const PORT=3000
app.listen(PORT,()=>{
    console.log(`check the http://localhost:${PORT}`)
})