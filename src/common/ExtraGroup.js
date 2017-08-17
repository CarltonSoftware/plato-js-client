var SingleEntity = require('./SingleEntity');

function ExtraGroup(id) {
  this.path = this.createPath = 'extragroup';
  this.id = id;
}
ExtraGroup.prototype = new SingleEntity();

ExtraGroup.prototype.toArray = function() {
  return {
    extragroup: this.extragroup,
    description: this.description
  };
};

module.exports = ExtraGroup;
