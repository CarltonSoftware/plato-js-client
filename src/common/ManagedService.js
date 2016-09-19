var SingleEntity = require('./SingleEntity');

function ManagedService(id) {
  this.path = 'service';
  this.createPath = 'service';
  this.id = id;
}
ManagedService.prototype = new SingleEntity();

ManagedService.prototype.toCreateArray = function() {
  return {
    name: this.name,
    description: this.description,
    donotmodify: this.donotmodify,
    datetouse: this.datetouse,
    customerbookings: this.customerbookings,
    ownerbookings: this.ownerbookings
  };
};

module.exports = ManagedService;
