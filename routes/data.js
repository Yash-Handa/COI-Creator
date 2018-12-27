const express = require('express');
const authorizer = require('../middlewares/authorizer');
// const saveUser = require('../DB/createUsers');

const router = express.Router();

/* GET users listing. */
router.get('/:secret', authorizer, (req, res) => {
  res.send('respond with a resource');
});

module.exports = router;
