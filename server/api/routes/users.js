const router = require('express').Router();
module.exports = router;
const { users } = require('../data');

router.get('/', (req, res) => {
  res.send(users);
});
