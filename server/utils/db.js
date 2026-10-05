const mongoose=require('mongoose')
const URI='mongodb+srv://fg7829098:faizanfk0309@cluster01.erroaal.mongodb.net/HeavenEarthRealms?appName=Cluster01'
const connectDB=async()=>{
    try {
        await mongoose.connect(URI)
        console.log('conneted to database')
    } catch (error) {
        console.log('database connection failure')
        process.exit(0)
    }
}
module.exports=connectDB