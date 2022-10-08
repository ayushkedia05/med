const express = require('express');
const Authcontroller = require('../controllers/youtubecontroller.js');
// const { signup } = require('../controllers/Authcontroller.js');

const router = express.Router();
// router.use(Authcontroller.islogedin);

  router.get('/getyoutube', Authcontroller.Data);


module.exports = router;
