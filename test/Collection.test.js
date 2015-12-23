var assert = require('assert');
var Collection = require('../src/').Collection;

describe('Collection', function() {
  var collection = new Collection();

  it('should throw an error when the path is undefined', function() {
    assert.throws(function() {
      collection.fetch();
    }, /No path specified for entity/);
  });
});
