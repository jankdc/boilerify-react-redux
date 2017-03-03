const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Insert Title Here',
    development: process.env.NODE_ENV === 'development'
  });
});

module.exports = router;
