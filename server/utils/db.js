const mongoose=require('mongoose')
const URI=''
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