
import express from 'express'
import 'dotenv/config'
import { Database } from './config/databaseconnection/db.js'
import FormRouter from './routers/FormRouter.js'
import cors from 'cors'


const app = express()


app.use(cors());

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to the Server! The API is working.')
})

Database()



app.use('/api/form',FormRouter)
console.log("Router Successfully Developed")

/*app.listen(process.env.PORT, ()=>{

    


    console.log("Server is Live Perfectly on PORT:"+ process.env.PORT)



})


*/


export default app;
