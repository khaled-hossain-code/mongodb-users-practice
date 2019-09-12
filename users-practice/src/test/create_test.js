const assert = require('assert');
const User = require('../src/models/User');

describe('Createing records', () => {
  it('saves a user', () => {
    const joe = new User({name: 'joe'});
    joe.save();
  });

  it('saves a user', () => {
    const jane = new User({name: 'jane'});
    jane.save();
  });
})
