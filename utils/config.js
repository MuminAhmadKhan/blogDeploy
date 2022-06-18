require('dotenv').config()
 const PORT = process.env.PORT
 const MONGODB_URI = process.env.NODE_ENV === 'test' 
 ? process.env.TEST_MONGO_URI
 : process.env.MONGO_URI
 console.log(MONGODB_URI)
 module.exports={
     PORT,
     MONGODB_URI
 }