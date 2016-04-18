var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function PotentialDuplicate(id) {
  this.path = 'potentialduplicate';
  this.createPath = 'potentialduplicate';
  this.id = id;
  this.actor1 = new EntityLink({
    entity: 'Customer'
  });
  this.actor2 = new EntityLink({
    entity: 'Customer'
  });
}
PotentialDuplicate.prototype = new SingleEntity();
PotentialDuplicate.prototype.toArray = function() {
  return {

  };
}

module.exports = PotentialDuplicate;
