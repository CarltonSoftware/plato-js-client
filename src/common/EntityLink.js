var index = require('./../index.js');

function EntityLink(options) {
  this.entity = index.common[options.entity];
  this.parent = options.parent;

  this.factory = function(path) {
    var routeParts = path.split('/');
    var id = parseInt(routeParts.pop());

    // Remove last path from route
    path = routeParts.pop();

    // Create new entity
    var e = new this.entity(id);

    if (typeof this.parent === 'object' && typeof this.parent.factory === 'function') {
      e.parent = this.parent.factory(routeParts.join('/'));
    } else if (typeof this.parent === 'object') {
      e.parent = this.parent;
    }

    if (typeof e.path === 'undefined') {
      e.path = path;
      e.createPath = path;
    }

    return e;
  };
}


module.exports = EntityLink;
