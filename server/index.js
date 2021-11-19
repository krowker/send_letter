require('dotenv').config()
const {MongoClient} = require('mongodb')

const mongoClient = new MongoClient(process.env.DB_URL)

const start = async() => {
   try {
      await mongoClient.connect()
      const db = mongoClient.db('admin')
      const result = await db.command({ping: 1})
      console.log(result);
   } catch (error) {
      console.log(error);
   } finally {
      await mongoClient.close();
      console.log("Подключение закрыто");
  }
}

start()