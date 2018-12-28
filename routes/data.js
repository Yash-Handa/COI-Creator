const express = require('express');
// const path = require('path');
const authorizer = require('../middlewares/authorizer');
const renderObj = require('../middlewares/renderObj');
const sanitizer = require('../middlewares/sanitizer');
const validator = require('../middlewares/validator');
// const saveUser = require('../DB/createUsers');

const router = express.Router();

/* GET users listing. */
router.get('/:secret', authorizer, (req, res) => {
  // console.log(req.body);
  res.render('form', { title: 'COI-Form' });
});

router.post('/:secret', authorizer, sanitizer, validator, renderObj, (req, res) => {
  console.log(req.body);
  res.render('form', res.locals.form);
});

module.exports = router;
