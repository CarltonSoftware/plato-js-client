var SingleEntity = require('./SingleEntity');

function SecurityFeature(id) {
  this.path = 'securityfeature';
  this.createPath = this.path;
  this.id = id;
}
SecurityFeature.prototype = new SingleEntity();

SecurityFeature.prototype.toArray = function() {
  return {
    'name': this.name
  };
};

module.exports = SecurityFeature;