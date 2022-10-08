const express = require('express');
let cors = require("cors");
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');
 
const app = express();

app.use(cors());

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
// app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');

  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.get('/se',(req,res)=>{
res.send("fre");
})

app.use('/api/v1/users', userRouter);

module.exports = app;
  