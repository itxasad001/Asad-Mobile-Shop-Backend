
import express from 'express'
import 'dotenv/config'
import { Database } from './config/databaseconnection/db.js'
import FormRouter from './routers/FormRouter.js'
import cors from 'cors'


const app = express()


app.use(cors());

/*app.use(cors({ origin: 'https://asad-mobile-shop-backend.vercel.app',
     methods: ['GET', 'POST', 'PUT', 'DELETE'], credentials: true }));*/

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to the Server! The API is working.')
})

app.use(async (req, res, next) => {
  try {
    await Database();
    next();
  } catch (error) {
    console.error("DB Connection Error:", error);
    res.status(500).json({
      error: true,
      success: false,
      message: error.message,
    });
  }
});



app.use('/api/form',FormRouter)
console.log("Router Successfully Developed")

 const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });






export default app;
