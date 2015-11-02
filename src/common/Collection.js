var Collection = require('./StaticCollection');

/**
 * Returns a promise of the fetched resource
 * 
 * @returns {Collection.prototype@call;promiseResult}
 */
Collection.prototype.fetch = function() {
    if (typeof this.options.path === 'undefined') {
        throw new pathNotSpecifiedError('No path specified for entity');
    }
    
    return this.okPromiseResult(this.options.path);
};

module.exports = Collection;