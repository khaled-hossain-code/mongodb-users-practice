const assert = require('assert');
const User = require('../models/user');

describe('Createing records', () => {
  it('saves a user', () => {
    const joe = new User({name: 'joe'});
    joe.save();
  })
})
