var client = require('./platoJsClient').getInstance();
var pathNotSpecifiedError = require('./../error/pathNotSpecified');
var statusError = require('./../error/statusError');
var Promise = require("es6-promise").Promise;

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
                // Recursive call
                this[prop].mutateResponse(entity[prop]);
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
 *
 * @returns {Promise}
 */
Entity.prototype.okPromiseResult = function(path) {
    var result = client.get(path);
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
 * Return a promised result for a delete
 *
 * @param {String} path Path to request
 *
 * @returns {Promise}
 */
Entity.prototype.deletePromiseResult = function(path) {
    var result = client.delete({ path: path });
    return new Promise(function(resolve, reject) {
        result.then(function() {
            if (res.status.code === 204) {
                resolve(true);
            } else {
                reject(new statusError(res));
            }
        });
    });
};

Entity.prototype.get = function(path) {

    if (typeof this.path === 'undefined') {
        throw new pathNotSpecifiedError('No path specified for entity');
    }

    return this.okPromiseResult(this.path);
};


module.exports = Entity;
