var SingleEntity = require('./SingleEntity');

function FlagType(id) {
  this.path = 'flagtype';
  this.createPath = 'flagtype';
  this.id = id;
}

FlagType.prototype = new SingleEntity();
FlagType.prototype.toArray = function() {
  return {
    flagtype: this.flagtype,
    description: this.description,
    allowbooking: this.allowbooking,
  };
};

module.exports = FlagType;
