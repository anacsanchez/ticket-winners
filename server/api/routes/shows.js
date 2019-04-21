const router = require('express').Router();
const winnersRouter = require('./winners.js');
const { shows } = require('../data');

module.exports = router;

router.get('/', (req, res) => {
  res.json(shows);
});

router.param('showId', (req,res,next,id) => {
  const show = shows.find(el => el.id == id);
  if (show) {
    req.show = show;
    next();
  } else {
    res.send('Show Not Found');
  }
});

router.get('/:showId', (req, res, next) => {
  res.send(req.show);
});

router.use('/:showId/winners', winnersRouter);
