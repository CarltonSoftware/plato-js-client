var SingleEntity = require('./SingleEntity');

function SymfonyRoute(id) {
  this.path = 'route';
  this.id = id;

  this.validSchema = function() {
    return {};
  }
}

SymfonyRoute.prototype = new SingleEntity();

module.exports = SymfonyRoute;
