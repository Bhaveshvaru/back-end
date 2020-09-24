const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');

//config the env
dotenv.config();

//body-parser
 app.use(bodyParse.urlencoded({extended:false}));
 app.use(bodyParse.json())

// connect to database
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
  console.log('MongoDB Connected');
};
connectDB();

//app listen
app.listen(process.env.PORT, () => {
  console.log(`server is started and running on port ${process.env.PORT}`);
});
