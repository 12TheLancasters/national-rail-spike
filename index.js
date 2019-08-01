require('dotenv').config();
const fs = require('fs');
const Rail = require('national-rail-darwin');
const rail = new Rail(process.env.DARWIN_TOKEN);

const station = 'WBC';

rail.getDepartureBoard(station, {}, (err,result) => {
  fs.writeFileSync(`${station}-${new Date().toISOString()}.json`, JSON.stringify({err, result}))
});
