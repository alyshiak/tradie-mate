const db = require('../config/connection');
const { User, Tradesperson } = require('../models');
const userSeeds = require('./userSeeds.json');
const tradieSeeds = require('./tradieSeeds.json')

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    await Tradesperson.deleteMany({});
    await Tradesperson.create(tradieSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});