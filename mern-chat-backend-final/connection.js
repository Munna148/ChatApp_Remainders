const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://Munna:Munna123@cluster0.aozqw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, ()=> {
  console.log('connected to mongodb')
})
