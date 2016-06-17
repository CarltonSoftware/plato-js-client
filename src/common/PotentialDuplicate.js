var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function PotentialDuplicate(id) {
  var Actor = require('./Actor');

  this.path = 'potentialduplicate';
  this.createPath = 'potentialduplicate';
  this.id = id;
  this.actor1 = new Actor();
  this.actor2 = new Actor();
  this.processedby = new EntityLink({ entity: 'TabsUser' });
}
PotentialDuplicate.prototype = new SingleEntity();
PotentialDuplicate.prototype.toArray = function() {
  return {
    actorkept: this.actorkept,
    processedbytabsuserid: this.processedby.id,
    notduplicate: this.notduplicate
  };
};

module.exports = PotentialDuplicate;
