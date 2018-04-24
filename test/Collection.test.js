var assert = require('assert');
var expect = require('chai').expect;
var Collection = require('../src/').Collection;
var PropertyOwner = require('../src/').common.PropertyOwner;

describe('Collection', function() {
  var collection = new Collection();

  describe('#fetch', function() {
    it('should throw an error when the path is undefined', function() {
      assert.throws(function() {
        collection.fetch();
      }, /No path specified for entity/);
    });
  });

  describe('#mutateResponse', function() {
    var collection = new Collection({object: PropertyOwner});

    it('should mutate lists of strings into entities', function() { 
      collection.mutateResponse([
        '/v2/owner/6',
        '/v2/owner/7',
        '/v2/owner/20'
      ]);

      collection.forEach(function(entity) {
        expect(entity).to.be.an('object');
      });
      expect(collection.collection.pop().id).to.equal(20);
      expect(collection.collection.pop().id).to.equal(7);
      expect(collection.collection.pop().id).to.equal(6);
    });

    it('should mutate lists of objects into entities', function() {
      var response = [
        {
          id: 1,
          owner: '/v2/customer/6'
        },
        {
          id: 2,
          owner: '/v2/customer/7'
        },
        {
          id: 3,
          owner: '/v2/customer/20'
        }
      ];
      collection.mutateResponse(response);

      response.forEach(function(item) {
        var entity = collection.getEntityById(item.id);
        expect(entity).to.be.an('object');
        expect(entity.id).to.equal(item.id);
      });
      expect(collection.collection[0].owner.id).to.equal(6);
      expect(collection.collection[1].owner.id).to.equal(7);
      expect(collection.collection[2].owner.id).to.equal(20);
    });
  });

  collection.collection = [
    {
      id: 1,
      name: 'Bob'
    },
    {
      id: 2,
      name: 'Alice'
    },
    {
      id: 3,
      name: 'Bob'
    }
  ];

  describe('#getEntityById', function() {
    it('should return the entity with the given id', function() {
      var entity = collection.getEntityById(2);

      assert.equal(entity.id, 2);
      assert.equal(entity.name, 'Alice');
    });
  });

  describe('#sortBy', function() {
    it('should order the collection in ascending order by default', function() {
      var sortedCollection = collection.sortBy('name');

      assert.equal(sortedCollection.collection[0].name, 'Alice');
      assert.equal(sortedCollection.collection[1].name, 'Bob');
      assert.equal(sortedCollection.collection[2].name, 'Bob');
    });

    it('should order the collection in descending order', function() {
      var sortedCollection = collection.sortBy('name', 'desc');

      assert.equal(sortedCollection.collection[0].name, 'Bob');
      assert.equal(sortedCollection.collection[1].name, 'Bob');
      assert.equal(sortedCollection.collection[2].name, 'Alice');
    });
  });

});
