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
    
    return this.updatePromiseResult(this.path + '/' + this.id, this.toArray());
};

/**
 * Return the post representation
 * 
 * @returns {Entity.prototype.toArray.EntityAnonym$0}
 */
SingleEntity.prototype.toArray = function() {
    return {};
};

module.exports = SingleEntity;