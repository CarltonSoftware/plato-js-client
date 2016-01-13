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
SingleEntity.prototype.update = function() {
  if (typeof this.id === 'undefined') {
    throw new idNotFoundError('Id not specified.');
  }

  if (typeof this.path === 'undefined') {
    throw new pathNotSpecifiedError('No path specified for entity');
  }

  return this.updatePromiseResult(
    this.path + '/' + this.id,
    _.pick(this.toUpdateArray(), this.isDefined)
  );
};

/**
 * Create request method
 *
 * @returns {Promise}
 */
SingleEntity.prototype.create = function() {
  if (typeof this.createPath === 'undefined') {
    throw new pathNotSpecifiedError('No createPath specified for entity');
  }
  return this.createPromiseResult(
    this.createPath,
    _.pick(this.toCreateArray(), this.isDefined)
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
    this.createPath,
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

  return this.deletePromiseResult(this.path + '/' + this.id);
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

module.exports = SingleEntity;
