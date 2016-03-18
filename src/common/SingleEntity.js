var Entity = require('./Entity');
var idNotFoundError = require('./../error/idNotFound');
var pathNotSpecifiedError = require('./../error/pathNotSpecified');
var _ = require('underscore');

/**
 * Base object
 *
 * @returns {SingleEntity}
 */
function SingleEntity() {
  this.isDefined = function(val) {
    return typeof val !== 'undefined';
  }
};

/**
 * Inherit methods from Entity object
 *
 * @type Entity
 */
SingleEntity.prototype = new Entity();

/**
 * Get request method
 *
 * @returns {Promise}
 */
SingleEntity.prototype.get = function() {
  if (typeof this.id === 'undefined') {
    throw new idNotFoundError('Id not specified.');
  }

  if (typeof this.path === 'undefined') {
    throw new pathNotSpecifiedError('No path specified for entity');
  }

  return this.okPromiseResult(this.path + '/' + this.id);
};

/**
 * Update request method
 *
 * @returns {Promise}
 */
SingleEntity.prototype.update = function(fields) {
  // Loop over each of the supplied fields, and set them on the current object
  _.each(fields, function(value, key) {
    this[key] = value;
  }.bind(this));

  if (typeof this.id === 'undefined') {
    throw new idNotFoundError('Id not specified.');
  }

  if (typeof this.path === 'undefined') {
    throw new pathNotSpecifiedError('No path specified for entity');
  }

  return this.updatePromiseResult(
    this.getUpdatePath(),
    this.removeUndefineds(this.toUpdateArray())
  );
};

/**
 * Return a filtered array
 *
 * @param {array} array
 *
 * @return {array}
 */
SingleEntity.prototype.removeUndefineds = function(array) {
  return _.pick(array, this.isDefined);
};

/**
 * Create request method
 *
 * @returns {Promise}
 */
SingleEntity.prototype.create = function(fields) {
  // Loop over each of the supplied fields, and set them on the current object
  _.each(fields, function(value, key) {
    this[key] = value;
  }.bind(this));

  if (typeof this.createPath === 'undefined') {
    throw new pathNotSpecifiedError('No createPath specified for entity');
  }

  return this.createPromiseResult(
    this.getCreatePath(),
    this.removeUndefineds(this.toCreateArray())
  );
};

/**
 * Upload request method
 *
 * @returns {Promise}
 */
SingleEntity.prototype.upload = function() {
  if (typeof this.createPath === 'undefined') {
    throw new pathNotSpecifiedError('No createPath specified for entity');
  }

  return this.uploadPromiseResult(
    this.getCreatePath(),
    this.toFormData()
  );
};

/**
 * Delete request method
 *
 * @returns {Promise}
 */
SingleEntity.prototype.delete = function() {
  if (typeof this.id === 'undefined') {
    throw new idNotFoundError('Id not specified.');
  }

  if (typeof this.path === 'undefined') {
    throw new pathNotSpecifiedError('No deletePath specified for entity');
  }

  return this.deletePromiseResult(this.getUpdatePath());
};

/**
 * Return the post representation
 *
 * @returns {Entity.prototype.toArray.EntityAnonym$0}
 */
SingleEntity.prototype.toArray = function() {
  return {};
};

/**
 * Return the post representation
 *
 * @returns {Entity.prototype.toArray.EntityAnonym$0}
 */
SingleEntity.prototype.toCreateArray = function() {
  return this.toArray();
};

/**
 * Return the FormData representation
 *
 * @returns {Entity.prototype.toArray.EntityAnonym$0}
 */
SingleEntity.prototype.toFormData = function() {
  var formData = new FormData();
  return formData;
};

/**
 * Return the put data representation
 *
 * @returns {SingleEntity.prototype.toUpdateArray.SingleEntityAnonym$1}
 */
SingleEntity.prototype.toUpdateArray = function() {
  return _.extend({ id: this.id }, this.toCreateArray());
};

/**
 * Check for a parent object and recurse through, creating a path
 * based on the parents of the object
 *
 * @returns {String}
 */
SingleEntity.prototype.getCreatePath = function(prefix) {
  if (typeof this.parent === 'object') {
    prefix = this.parent.getUpdatePath(prefix);
  }

  return ((typeof prefix === 'string') ? prefix : '') + '/' + this.createPath;
};

/**
 * Check for a parent object and recurse through, creating a path
 * based on the parents of the object
 *
 * @returns {String}
 */
SingleEntity.prototype.getUpdatePath = function(prefix) {
  if (typeof this.parent === 'object') {
    prefix = this.parent.getUpdatePath(prefix);
  }

  return ((typeof prefix === 'string') ? prefix : '') + '/' + this.createPath + '/' + this.id;
};

module.exports = SingleEntity;
