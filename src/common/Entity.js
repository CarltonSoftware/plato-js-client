var client = require('./platoJsClient').getInstance();
var pathNotSpecifiedError = require('./../error/pathNotSpecified');
var statusError = require('./../error/statusError');
var badRequestError = require('./../error/badRequestError');
var _ = require('underscore');

/**
 * Base object
 *
 * @returns {Entity}
 */
function Entity() {}

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
      if (this.hasOwnProperty(prop) && typeof this[prop] === 'object' && this[prop] !== null) {
        if (typeof entity[prop] === 'string' &&
          entity[prop].indexOf('/v2') === 0
        ) {
          // See if EntityLink function is being used
          if (typeof this[prop].factory === 'function') {
            this[prop] = this[prop].factory(entity[prop]);
          } else {
            // Map id's of route string to entity object so the get() request will
            // know of the correct path.
            this[prop].mapRouteIds(entity[prop]);
          }
        } else if (typeof this[prop].mutateResponse === 'function') {
          // Recursive call
          this[prop].mutateResponse(entity[prop]);
        } else {
          this[prop] = entity[prop];
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
  var result = client.get({ path: path, params: _.pick(params, _.identity) });
  var e = this;
  return new Promise(function(resolve, reject) {
    result.then(function(res) {
      if (res.status.code === 200) {
        if (e.cacheKey) {
          localStorage[e.cacheKey] = JSON.stringify({entity: res.entity,
                                                     cachedTime: Date.now(),
                                                     buildDate: localStorage.buildDate});
        };
        resolve(e.mutateResponse(res.entity));
      } else {
        reject(new statusError(res));
      }
    }, reject);
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
      // MS: Updated this to allow a 201 as in the case of bookingExtras an update results in the creation of a new bookingExtra ( with a 201 code )
      if (res.status.code === 204 || res.status.code === 201) {
        resolve(e);
      } else {
        reject(Entity.prototype.handleError(res));
      }
    }, reject);
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
Entity.prototype.createSimplePromiseResult = function(path, data) {
  var result = client.post({ path: path, entity: data });
  var e = this;
  return new Promise(function(resolve, reject) {
    result.then(function(res) {
      if (res.status.code === 201) {
        resolve(e);
      } else {
        reject(Entity.prototype.handleError(res));
      }
    }, reject);
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
        if (res.headers.hasOwnProperty('Content-Location')) {
          var newLocation = e.replacePath(res.headers['Content-Location']);
          client.get({ path: newLocation}).then(function(res) {
            resolve(e.mutateResponse(res.entity));
          }, function(res) {
            reject(new statusError(res));
          }, reject);
        } else {
          resolve(e.mutateResponse(res.entity));
        }
      } else {
        reject(new statusError(res));
      }
    }, reject);
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
        var newLocation = e.replacePath(res.headers['Content-Location']);
        client.get({ path: newLocation}).then(function(res) {
          resolve(e.mutateResponse(res.entity));
        }, function(res) {
          reject(new statusError(res));
        }, reject);
      } else {
        reject(new statusError(res));
      }
    }, reject);
  });
};

/**
 * Remove some stuff from the path
 *
 * @param {String} path
 *
 * @return {String}
 */
Entity.prototype.replacePath = function(path) {
    return path.replace('/app_dev.php', '') //TODO: remove the need for .replace(...)
      .replace('/app.php', '')
      .replace('/v2', '')
      .replace('/plato/web', '')
      .replace('/plato', '');
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
    }, reject);
  });
};

/**
 * Get the entity
 *
 * @returns {Promise}
 */
Entity.prototype.get = function() {
  if (typeof this.path === 'undefined') {
    throw new pathNotSpecifiedError('No path specified for entity');
  }
  if (localStorage[this.path]) {
    return this.cachedOkPromiseResult(localStorage[this.path]);
  } else {
    return this.okPromiseResult(this.path, this.params);
  }

};

/**
 * Get the full path.
 *
 * @return {String}
 */
Entity.prototype.getFullPath = function(path, params) {
  if (params) {
    if (params.page) {
      path += '?page=' + params.page;
    }
    if (params.limit) {
      path += '&limit=' + params.limit;
    }
    if (params.orderBy) {
      path += '&orderBy=' + params.orderBy;
    }
  }
  return path;
};

/**
 *
 * @param {type} route
 * @returns {SingleEntity|nm$_Entity.Entity.prototype}
 */
Entity.prototype.cachedOkPromiseResult = function(json) {
  var e = this;
  return new Promise(function(resolve, reject) {
        resolve(e.mutateResponse(json));
  });
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

/**
 * Handle the errors thown by the client
 *
 * @param {Object} res
 *
 * @return {Error}
 */
Entity.prototype.handleError = function(res) {
  //TODO: At the moment the API sends a 404 status code for client errors.  We'd ideally handle these differently from actual 404s.
  //if (res.status.code == 404) {
  //  return new statusError(res);
  //} else if (res.status.code === 400) {
    return new badRequestError(res);
  //}
};

/**
 * Encode an array of parameters
 *
 * @param {Array} data
 *
 * @return {String}
 */
Entity.prototype.getAsUriParameters = function(data) {
  return Object.keys(data).map(function (k) {
    if (_.isArray(data[k])) {
      var keyE = encodeURIComponent(k + '[]');
      return data[k].map(function (subData) {
        return keyE + '=' + encodeURIComponent(subData);
      }).join('&');
    } else {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
    }
  }).join('&');
};


module.exports = Entity;
