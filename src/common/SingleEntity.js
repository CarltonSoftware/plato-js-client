var Entity = require('./Entity');

/**
 * Base object
 * 
 * @returns {SingleEntity}
 */
function SingleEntity() {};

/**
 * Inherit methods from Entity object
 * 
 * @type Entity
 */
SingleEntity.prototype = new Entity();

/**
 * Request method
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
    
    return this.promiseResult(this.path + '/' + this.id);
};

module.exports = SingleEntity;