var client = require('./platoJsClient').getInstance();
var pathNotSpecifiedError = require('./../error/pathNotSpecified');
var idNotFoundError = require('./../error/pathNotSpecified');

function Entity() {};
Entity.prototype.get = function() {
    if (typeof this.id === 'undefined') {
        throw new idNotFoundError('Id not specified.');
    }

    if (typeof this.path === 'undefined') {
        throw new pathNotSpecifiedError('No path specified for entity');
    }

    return client.get(this.path + '/' + this.id);
};


module.exports = Entity;