import dotenv from 'dotenv'
dotenv.config()

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
})

app.listen(process.env.PORT, (err, res) => {
  if (err) throw err;
  console.log('Server is running on port 3000');
})