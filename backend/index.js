import app from './server.js'
import mongodb from "mongodb"
import dotenv from 'dotenv'
import helpingHandDb from './api/dao/helpingHandDao.js'
// import foodDeliveryDAO from './api/dao/foodDeliveryDAO.js'
dotenv.config()
const MongoClient=mongodb.MongoClient

const port=process.env.PORT || 8000

MongoClient.connect(
    process.env.HELPING_HAND_DB_URL,
).catch(e=>{
    console.error(e)
    process.exit(1)
}).then(async client=>{
    await helpingHandDb.injectDB(client)
    app.listen(port,()=>{
        console.log("listening");
    })
})