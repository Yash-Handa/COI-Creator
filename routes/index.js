const express = require('express');
const authorizer = require('../middlewares/authorizer');

const router = express.Router();

/* GET home page. */
router.get('/:secret', authorizer, (req, res) => {
  // console.log(process.env.SECRET_KEY);
  res.render('index', { title: 'COI-Creator' });
});

module.exports = router;
