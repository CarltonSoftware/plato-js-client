var Entity = require('./Entity');

var _ = require('underscore');

/**
 * Collection object
 *
 * @param {Object} options
 *
 * @returns {Collection}
 */
function StaticCollection(options) {
    this.options = options || {};
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
    var object = this.options.object;

    if (entity.elements) {
        var elements = entity.elements;

        this.total = entity.total;
        this.page = entity.page;
        this.limit = entity.limit;
        this.time = entity.time;
    } else {
        var elements = entity;
    }

    this.collection = _.map(elements, function(element) {
        var entity = new object();
        return entity.mutateEntity(element);
    });
    return this;
};

StaticCollection.prototype.forEach = function(callback) {
    this.collection.forEach(callback);
}

module.exports = StaticCollection;
