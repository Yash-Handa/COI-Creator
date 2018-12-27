const config = require('../bin/config/config');

module.exports = (req, res, next) => {
  if (req.params.secret === config.key) next();
  else next(new Error('Don\'t be smart :)'));
};
