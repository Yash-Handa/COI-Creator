const express = require('express');
const authorizer = require('../middlewares/authorizer');
const path = require('path');
// const saveUser = require('../DB/createUsers');

const router = express.Router();

/* GET users listing. */
router.get('/:secret', authorizer, (req, res) => {
  res.status(200).sendfile(path.join(__dirname, '../public/src/html/Creationform.html'));
});

module.exports = router;
