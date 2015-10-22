var Entity = require('./Entity');

/**
 * Collection object
 * 
 * @param {Object} options
 * 
 * @returns {Collection}
 */
function Collection(options) {
    this.options = options;
    this.collection = [];
};

/**
 * Inherit methods from Entity object
 * 
 * @type Entity
 */
Collection.prototype = new Entity();

/**
 * Function used to map json values onto a single object. This will be
 * extended in the collection class to handle arrays.
 * 
 * @param {Object} res Entity
 * 
 * @returns {Entity.prototype}
 */
Collection.prototype.mutateResponse = function(entity) {
    var _self = this;
    entity.forEach(function(e) {
        var element = new _self.options.object;
        _self.collection.push(
            element.mutateEntity(e)
        );
    });
    
    return this;
};

/**
 * Returns a promise of the fetched resource
 * 
 * @returns {Collection.prototype@call;promiseResult}
 */
Collection.prototype.fetch = function() {
    if (typeof this.options.path === 'undefined') {
        throw new pathNotSpecifiedError('No path specified for entity');
    }
    
    return this.promiseResult(this.options.path);
};

module.exports = Collection;