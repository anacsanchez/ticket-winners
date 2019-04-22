const router = require('express').Router({ mergeParams: true });
const { pickWinners } = require('../helpers');
module.exports = router;

router.get('/', (req,res) => {
  res.send(req.show.winners);
});

router.post('/', (req, res) => {
  if (!req.body.tickets) {
    res.json();
  }
  else {
    const winners = pickWinners(req.show.entrants, req.body.tickets);
    res.json(winners);
  }
});
