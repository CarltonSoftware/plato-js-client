var assert = require('assert');
var Entity = require('../src/common/Entity.js');

describe('Entity', function() {
  describe('#get', function() {
    it('should throw an error when the path is undefined', function() {
      var entity = new Entity();

      assert.throws(function() {
        entity.get();
      }, /No path specified for entity/);
    });
  });

  describe('#mutateEntity', function() {
    it('should mutate a string into an entity', function() {
      var entity = new Entity();

      entity.relation = new Entity();
      entity.mutateEntity({relation: '/v2/customer/14'});

      assert.equal(typeof entity.relation, 'object');
      assert.equal(entity.relation.id, 14);
    });

    it('should mutate an object into an entity', function() {
      var entity = new Entity();

      entity.relation = new Entity();
      entity.relation.relation = new Entity();
      entity.mutateEntity({id: 2, relation: {id: 99, relation: '/v2/customer/54'}});

      assert.equal(entity.id, 2);
      assert.equal(entity.relation.id, 99);
      assert.equal(typeof entity.relation.relation, 'object');
      assert.equal(entity.relation.relation.id, 54);
    });
  });
});
