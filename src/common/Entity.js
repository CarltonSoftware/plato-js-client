var client = require('./platoJsClient').getInstance();
var pathNotSpecifiedError = require('./../error/pathNotSpecified');
var statusError = require('./../error/statusError');
var badRequestError = require('./../error/badRequestError');
var Promise = require('es6-promise').Promise;

/**
 * Base object
 *
 * @returns {Entity}
 */
function Entity() {};

/**
 * Function used to map json values onto a single object. This will be
 * extended in the collection class to handle arrays.
 *
 * @param {Object} res Entity
 *
 * @returns {Entity.prototype}
 */
Entity.prototype.mutateResponse = function(entity) {
  return this.mutateEntity(entity);
};

/**
 * Function responsible for mapping the values onto the parent object
 *
 * @param {Object} res Entity
 *
 * @returns {Entity.prototype}
 */
Entity.prototype.mutateEntity = function(entity) {
  for (var prop in entity) {
    if (entity.hasOwnProperty(prop)) {
      if (this.hasOwnProperty(prop) && typeof this[prop] === 'object') {
        if (typeof entity[prop] === 'string'
          && entity[prop].indexOf('/v2') === 0
        ) {
          // Map id's of route string to entity object so the get() request will
          // know of the correct path.
          this[prop].mapRouteIds(entity[prop]);
        } else {
          // Recursive call
          this[prop].mutateResponse(entity[prop]);
        }
      } else {
        this[prop] = entity[prop];
      }
    }
  }

  return this;
};

/**
 * Return a mutated promised result
 *
 * @param {String} path Path to request
 * @param {Object} params Request paramaters
 *
 * @returns {Promise}
 */
Entity.prototype.okPromiseResult = function(path, params) {
  var result = client.get({ path: path, params: params });
  var e = this;
  return new Promise(function(resolve, reject) {
    result.then(function(res) {
      if (res.status.code === 200) {
        resolve(e.mutateResponse(res.entity));
      } else {
        reject(new statusError(res));
      }
    });
  });
};

/**
 * Return a promised result for an update
 *
 * @param {String} path Path to request
 * @param {Object} data Data to update
 *
 * @returns {Promise}
 */
Entity.prototype.updatePromiseResult = function(path, data) {
  var result = client.put({ path: path, entity: data });
  var e = this;
  return new Promise(function(resolve, reject) {
    result.then(function(res) {
      if (res.status.code === 204) {
        resolve(e);
      } else {
        console.log(res);
        reject(Entity.prototype.handleError(res));
      }
    });
  });
};

/**
 * Return a promised result for a create
 *
 * @param {String} path Path to request
 * @param {Object} data Data to create
 *
 * @returns {Promise}
 */
Entity.prototype.createPromiseResult = function(path, data) {
  var result = client.post({ path: path, entity: data });
  var e = this;
  return new Promise(function(resolve, reject) {
    result.then(function(res) {
      if (res.status.code === 201) {
        var newLocation = res.headers['Content-Location'].replace('/app_dev.php/v2', '');//TODO: remove the need for .replace(...)
        client.get({ path: newLocation}).then(function(res) {
          resolve(e.mutateResponse(res.entity));
        }, function(res) {
          reject(new statusError(res));
        });
      } else {
        reject(new statusError(res));
      }
    });
  });
};

/**
 * Return a promised result for an upload
 *
 * @param {String} path Path to request
 * @param {Object} data Data to upload
 *
 * @returns {Promise}
 */
Entity.prototype.uploadPromiseResult = function(path, data) {
  var result = client.upload({ path: path, entity: data });
  var e = this;
  return new Promise(function(resolve, reject) {
    result.then(function(res) {
      if (res.status.code === 201) {
        var newLocation = res.headers['Content-Location'].replace('/app_dev.php/v2', '');//TODO: remove the need for .replace(...)
        client.get({ path: newLocation}).then(function(res) {
          resolve(e.mutateResponse(res.entity));
        }, function(res) {
          reject(new statusError(res));
        });
      } else {
        reject(new statusError(res));
      }
    });
  });
};

/**
 * Return a promised result for a delete
 *
 * @param {String} path Path to request
 *
 * @returns {Promise}
 */
Entity.prototype.deletePromiseResult = function(path) {
  var result = client.delete({ path: path });
  return new Promise(function(resolve, reject) {
    result.then(function(res) {
      if (res.status.code === 204) {
        resolve(true);
      } else {
        reject(new statusError(res));
      }
    });
  });
};

/**
 * Get a result from a provided path
 *
 * @param {String} path
 *
 * @returns {Promise}
 */
Entity.prototype.get = function(path) {
  if (typeof this.path === 'undefined') {
    throw new pathNotSpecifiedError('No path specified for entity');
  }

  return this.okPromiseResult(this.path, this.params);
};

/**
 * Map the id's of the route to any properties that may be on the object.  This
 * method will be the default and will map the last element of the exploded
 * string to the id of the object.  Any complex routes will need to be handled
 * with a prototyped method.
 *
 * @param string route
 *
 * @returns {SingleEntity}
 */
 Entity.prototype.mapRouteIds = function(route) {
  var routeParts = route.split('/');
  this.id = parseInt(routeParts.pop());

  return this;
};

Entity.prototype.handleError = function(res) {
  //TODO: At the moment the API sends a 404 status code for client errors.  We'd ideally handle these differently from actual 404s.
  //if (res.status.code == 404) {
  //  return new statusError(res);
  //} else if (res.status.code === 400) {
    return new badRequestError(res);
  //}
}


module.exports = Entity;
