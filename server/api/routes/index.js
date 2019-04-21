const router = require('express').Router();
module.exports = router;

router.use('/shows', require('./shows'));

router.get('/', (req, res) => {
  res.send("You've reached the api!");
});

router.use((req, res, next) => {
  if (!req.route) {
    return next(new Error('Route Not Found'));
  }
  next();
});
