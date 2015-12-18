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
    var object, elements;

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

    this.collection = elements.map(function(element) {
        var entity = new object();
        if (typeof element === 'string') {
            return entity.mapRouteIds(element);
        } else {
            return entity.mutateEntity(element);
        }
    });
    return this;
};

/**
 * Get by id shortcut
 *
 * @param {number} Id
 *
 * @returns {Entity}
 */
StaticCollection.prototype.getEntityById = function(id) {
  return _.find(this.collection, function(item) {
    return item.id === id;
  });
};

/**
 * Get by object by reference
 *
 * @param {object} Item
 *
 * @returns {Entity}
 */
StaticCollection.prototype.getEntity = function(object) {
  return this.getEntityById(object.id);
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

/**
 * Map shortcut
 *
 * @param {object} Loop item
 *
 * @returns {undefined}
 */
StaticCollection.prototype.map = function(callback) {
  return this.collection.map(callback);
};

/**
 * Add an element to collection
 *
 * @param {object} Item to add
 *
 * @returns {undefined}
 */
StaticCollection.prototype.push = function(object) {
  this.collection.push(object);
};

/**
 * Update an element in the collection
 *
 * @param {object} Item
 *
 * @returns {undefined}
 */
StaticCollection.prototype.updateElement = function(object) {
  this.updateElementById(object.id, object);
};

/**
 * Update an element in the collection
 *
 * @param {object} Item
 *
 * @returns {undefined}
 */
StaticCollection.prototype.updateElementById = function(id, object) {
  for (var i = 0; i < this.collection.length; i++) {
    if (this.collection[i].id === id) {
      this.collection[i] = object;
      continue;
    }
  }
};

/**
 * Delete element from collection
 *
 * @param {object} Loop item
 *
 * @returns {undefined}
 */
StaticCollection.prototype.deleteElement = function(object) {
  this.deleteElementById(object.id);
};

/**
 * Delete element from collection
 *
 * @param {object} Loop item
 *
 * @returns {undefined}
 */
StaticCollection.prototype.deleteElementById = function(id) {
  for (var i = 0; i < this.collection.length; i++) {
    if (this.collection[i].id === id) {
      this.collection.splice(i, 1);
      continue;
    }
  }
};

module.exports = StaticCollection;
