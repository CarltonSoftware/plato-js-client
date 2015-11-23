var Entity = require('./Entity');
var discriminatorError = require('./../error/discriminatorError');
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
    this.discriminator;
    this.discriminatorMap = {};
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
    var object, entity, elements;
    
    if (this.discriminator && entity.hasOwnProperty(this.discriminator)) {
        var discr = entity[this.discriminator];
        if (this.discriminatorMap.hasOwnProperty(discr)) {
            object = new this.discriminatorMap[discr];
        } else {
            throw new discriminatorError(discr);
        }
    } else {
        object = this.options.object;
    }

    if (entity.elements) {
        elements = entity.elements;
        this.total = entity.total;
        this.page = entity.page;
        this.limit = entity.limit;
        this.time = entity.time;
    } else {
        elements = entity;
    }

    this.collection = _.map(elements, function(element) {
        var entity = new object();
        return entity.mutateEntity(element);
    });
    return this;
};

/**
 * Forearch shortcut
 * 
 * @param {Function} callback
 * 
 * @returns {undefined}
 */
StaticCollection.prototype.forEach = function(callback) {
    this.collection.forEach(callback);
};

module.exports = StaticCollection;
