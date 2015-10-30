var Entity = require('./Entity');

/**
 * Collection object
 * 
 * @param {Object} options
 * 
 * @returns {Collection}
 */
function StaticCollection(options) {
    this.options = options;
    this.collection = [];
};

/**
 * Inherit methods from Entity object
 * 
 * @type Entity
 */
StaticCollection.prototype = new Entity();

/**
 * Function used to map json values onto a single object. This will be
 * extended in the collection class to handle arrays.
 * 
 * @param {Object} res Entity
 * 
 * @returns {Entity.prototype}
 */
StaticCollection.prototype.mutateResponse = function(entity) {
    var _self = this;
    entity.forEach(function(e) {
        var element = new _self.options.object;
        _self.collection.push(
            element.mutateEntity(e)
        );
    });
    
    return this;
};

module.exports = StaticCollection;