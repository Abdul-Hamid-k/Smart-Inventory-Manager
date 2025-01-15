import dotenv from 'dotenv'
dotenv.config()

import express from 'express';
import connectDB from './config/mongodb.config.js';
import UserRouter from './routers/user.router.js'

const app = express();
connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/', UserRouter)




app.listen(process.env.PORT, (err, res) => {
  if (err) throw err;
  console.log('Server is running on port 3000');
})