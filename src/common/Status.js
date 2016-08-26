var SingleEntity = require('./SingleEntity');

function Status(id) {
  this.path = 'status';
  this.createPath = 'status';
  this.id = id;
}
Status.prototype = new SingleEntity();
Status.prototype.toArray = function() {
  return {
    id: this.id,
    name: this.name,
    allowbooking: this.allowbooking,
    priority: this.allowbooking
  };
};

module.exports = Status;
