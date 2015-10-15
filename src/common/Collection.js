var Entity = require('./Entity');
var Collection = new Entity.prototype;

Collection.fetch = function() {
    if (!path) {
        throw new pathNotSpecifiedError('No path specified for entity');
    }
        
    return client.get(path);
};

module.exports = Collection;