
const Apperror = require('../appError.js');
const catchAsync = require('./../catchAsync');
const axios=require('axios')
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

exports.Data = catchAsync(async (req, res, next) => {
  
  
  try {
    console.log("nj");

    let {title,pagetoken} = req.body;
    if(!pagetoken)
    pagetoken='';

    title="games";
    
    const youtubedata= await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=date&q=${title}&type=video&key=${process.env.youtube}&pageToken=${pagetoken}`)
   console.log(youtubedata)
    res.status(201).json({
      status: 'success',
     data:youtubedata.data
      
    });
       
  } catch (err) {
    console.log(err);
    status: 'fail', err;
  }
});


