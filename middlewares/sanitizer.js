module.exports = (req, res, next) => {
  const b = req.body;

  if (b.toggler === 'Part');
  else {
    b.toggler = 'Schedule';
  }

  Object.entries(b).forEach(
    ([key, value]) => {
      value.trim();
      if (value === '') {
        delete b[key];
      }
    },
  );
  next();
};
