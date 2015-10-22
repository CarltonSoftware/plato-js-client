var client = require('./platoJsClient').getInstance();
var pathNotSpecifiedError = require('./../error/pathNotSpecified');
var idNotFoundError = require('./../error/pathNotSpecified');
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
Entity.prototype.promiseResult = function(path) {
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


module.exports = Entity;