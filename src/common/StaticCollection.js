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

  var parent = this.options.parent || null;
  this.collection = elements.map(function(parent, element) {
    var entity;
    //If the object has a parent, pass the parent id into the constructor of the object
    //TODO: May need to be modified to handle a chain of parents
    if (parent) {
      entity = new object(parent.id);
    } else {
      entity = new object();
    }

    if (typeof element === 'string') {
      return entity.mapRouteIds(element);
    } else {
      return entity.mutateEntity(element);
    }
  }.bind(this, parent));

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
* forEach shortcut
*
* @param {function} callback
* @param {*} [thisArg] - Value to use as this
*
* @returns {undefined}
*/
StaticCollection.prototype.forEach = function(callback, thisArg) {
  this.collection.forEach(callback, thisArg);
};

/**
* Map shortcut
*
* @param {function} callback
* @param {*} [thisArg] - Value to use as this
*
* @returns {Array}
*/
StaticCollection.prototype.map = function(callback, thisArg) {
  return this.collection.map(callback, thisArg);
};

/**
* Filter shortcut
*
* @param {function} callback - Test function
* @param {*} [thisArg] - Value to use as this
*
* @returns {Array}
*/
StaticCollection.prototype.filter = function(callback, thisArg) {
  return this.collection.filter(callback, thisArg);
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

/**
* Sort the entities currently in the collection using a function
*
* @param {function} [compareFunction]
*
* @returns {Collection}
*/
StaticCollection.prototype.sort = function(compare) {
  this.collection.sort(compare);
  return this;
}

/**
* Sort the entities currently in the collection by a particular field
*
* @param {string} field - Name of field to order by
* @param {string} [order] - 'asc' (default) or 'desc'
*
* @returns {Collection}
*/
StaticCollection.prototype.orderBy = function(field, order) {
  var compareFunction = function(a, b) {
    if (a[field] === b[field]) {
      return 0;
    } else if (a[field] > b[field]) {
      return 1;
    } else {
      return -1;
    }
  };

  if (order === 'desc') {
    return this.sort(function(a, b) {
      return compareFunction(b, a);
    });
  } else {
    return this.sort(compareFunction);
  }
};


/**
 * Finds entities using a function
 *
 * @param  function predicate [description]
 *
 * @return array An array of entities that match the given predicate
 */
StaticCollection.prototype.find = function(predicate) {
  return _.find(this.collection, predicate);
}


/**
 * Finds entities that match the given properties
 *
 * @param Object properties eg. { id: 6 }
 *
 * @return array An array of entities that match the given properties
 */
StaticCollection.prototype.findBy = function(properties) {
  return _.where(this.collection, properties);
}

/**
 * Finds the first entity that match the given properties
 *
 * @param Object properties eg. { id: 6 }
 *
 * @return Object The first entity that match the given properties
 */
StaticCollection.prototype.findOneBy = function(properties) {
  return _.findWhere(this.collection, properties);
}


module.exports = StaticCollection;
