const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const db = require('./config/db');
const userRouter = require('./routes/users');

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use('/api/users', userRouter);

app.listen(PORT, () => {
  console.log('App is litening on port:', PORT);
});
