require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const errorMiddleware = require('./middlewares/error-middleware')

const PORT = process.env.PORT
const DB_URL = process.env.DB_URL
const CLIENT_URL = process.env.CLIENT_URL

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
   credentials: true,
   origin: CLIENT_URL
}))
app.use('/api', require('./routes/routes'))
app.use(errorMiddleware)


const start = async () => {
   try {
      await mongoose.connect(`${DB_URL}`, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         family: 4,
      })
      console.log(mongoose.connection.readyState);
      app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
   } catch (error) {
      console.log(error.message);
   }
}

start()