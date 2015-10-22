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
 * Function responsible for mapping the values onto the parent object
 * 
 * @param {Object} res Entity
 * 
 * @returns {Entity.prototype}
 */
Entity.prototype.mutateResponse = function(entity) {
    for (var prop in entity) {
        if (entity.hasOwnProperty(prop)) {
            this[prop] = entity[prop];
        }
    }
    
    return this;
};

/**
 * Request method
 * 
 * @returns {Promise}
 */
Entity.prototype.get = function() {
    if (typeof this.id === 'undefined') {
        throw new idNotFoundError('Id not specified.');
    }

    if (typeof this.path === 'undefined') {
        throw new pathNotSpecifiedError('No path specified for entity');
    }

    var result = client.get(this.path + '/' + this.id);
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