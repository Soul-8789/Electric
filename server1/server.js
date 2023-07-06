const express = require('express') ;
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnnection');
const dotenv = require('dotenv').config() ;

connectDb() ;
const app = express() ;
const port = 5000 ;

app.use(express.json()) ;
app.use('/api/home', require('./routes/home')) ;
app.use('/api/user', require('./routes/user')) ;
app.use(errorHandler) ;



app.listen(port, () =>{
      console.log('server is running on port 5000');
}) ;