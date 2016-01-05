var assert = require('assert');
var Collection = require('../src/').Collection;

describe('Collection', function() {
  var collection = new Collection();

  it('should throw an error when the path is undefined', function() {
    assert.throws(function() {
      collection.fetch();
    }, /No path specified for entity/);
  });

  collection.collection = [{name: 'Bob'}, {name: 'Alice'}, {name: 'Bob'}];

  it('orderBy should order the collection in ascending order by default', function() {
    var sortedCollection = collection.orderBy('name');

    assert.equal(sortedCollection.collection[0].name, 'Alice');
    assert.equal(sortedCollection.collection[1].name, 'Bob');
    assert.equal(sortedCollection.collection[2].name, 'Bob');
  });

  it('orderBy should order the collection in descending order', function() {
    var sortedCollection = collection.orderBy('name', 'desc');

    assert.equal(sortedCollection.collection[0].name, 'Bob');
    assert.equal(sortedCollection.collection[1].name, 'Bob');
    assert.equal(sortedCollection.collection[2].name, 'Alice');
  });

});
