var Collection = require('./StaticCollection');
var pathNotSpecifiedError = require('./../error/pathNotSpecified');

/**
 * Returns a promise of the fetched resource
 * 
 * @returns {Collection.prototype@call;promiseResult}
 */
Collection.prototype.fetch = function() {
    if (typeof this.options.path === 'undefined') {
        throw new pathNotSpecifiedError('No path specified for entity');
    }

    var params = {
        page: this.page || 1,
        limit: this.limit || 10
    };

    return this.okPromiseResult(this.options.path, params);
};

module.exports = Collection;