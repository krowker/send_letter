require('dotenv').config()
const express = require ('express')
const cookieParser = require('cookie-parser')
const mongoose = require ('mongoose')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use('/api', require('./routes/routes'))

const PORT = process.env.PORT

const start = async() => {
   try {
      await mongoose.connect (`${process.env.DB_URL}`, {
         useNewUrlParser: true
      })
      console.log(mongoose.connection.readyState);
      app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
   } catch (error) {
      console.log(error.message);
   }
}

start()