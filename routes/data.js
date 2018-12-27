const express = require('express');
const path = require('path');
const authorizer = require('../middlewares/authorizer');
// const saveUser = require('../DB/createUsers');

const router = express.Router();

/* GET users listing. */
router.get('/:secret', authorizer, (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/src/html/Creationform.html'));
});

router.post('/:secret', authorizer, (req, res) => {
  // console.log(req.body);
  res.status(200).send('ok');
});

module.exports = router;
