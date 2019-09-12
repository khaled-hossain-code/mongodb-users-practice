const assert = require('assert');
const User = require('../src/models/User');

describe('Createing records', () => {
  it('saves a user', async () => {
    const jane = new User({name: 'jane'});
    assert(jane.isNew === true)
    await jane.save();
    assert(jane.isNew === false)
  });
})
