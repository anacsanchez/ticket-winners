const router = require('express').Router();
module.exports = router;

router.post('/', (req,res) => {
  const data = require('./entrants.json');
  res.json(pickWinners(data, req.body.ticketsAvailable));
});

function pickWinners(entries, ticketsAvailable) {
  if (entries.length == 0 || ticketsAvailable == 0) {
    return [];
  }

  const winnerIndex = Math.floor(Math.random() * entries.length);
  let winner = entries[winnerIndex];
  if (winner.tickets > ticketsAvailable) {
    return pickWinners(removeEntrantFromArray(entries, winnerIndex), ticketsAvailable)
  }
  else {
    return [ winner, ...pickWinners(removeEntrantFromArray(entries, winnerIndex), ticketsAvailable - winner.tickets)];
  }
}

function removeEntrantFromArray(entries, entrantIndex) {
  if (entries.length == 0 || entries.length == 1) {
    return [];
  }
  else if (entrantIndex > entries.length) {
    return entries;
  }
  else if (entrantIndex == 0) {
    return entries.slice(entrantIndex + 1);
  }
  else {
    return entries.slice(0, entrantIndex).concat(entries.slice(entrantIndex + 1));
  }
}
