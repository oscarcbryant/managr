const db = require('../config/connection');
const { Profile } = require('../models');
const { Player } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const playerSeeds = require('./playerSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.insertMany(profileSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

db.once('open', async () => {
  try {
    await Player.deleteMany({});
    await Player.insertMany(playerSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});