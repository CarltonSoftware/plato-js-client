var client = require('./platoJsClient').getInstance();
function Collection(path) {
    this.path = path;
};
Collection.prototype.fetch = function() {
    if (typeof this.path === 'undefined') {
        throw new pathNotSpecifiedError('No path specified for entity');
    }
        
    return client.get(this.path);
};

module.exports = Collection;