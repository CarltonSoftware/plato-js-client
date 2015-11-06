var assert = require('assert');
var Entity = require('../src/common/Entity.js');

describe('Entity', function() {
    var entity = new Entity();

    it('should throw an error when the path is undefined', function() {
        assert.throws(function() {
            entity.get();
        }, /No path specified for entity/);
    });
});
