var SingleEntity = require('./SingleEntity');
var RoomType = require('./RoomType');

function PropertyRoom(propertyId, id) {
  this.path = '/property/' + propertyId + '/room';
  this.createPath = this.path;
  this.id = id;
}
PropertyRoom.prototype = new SingleEntity();

PropertyRoom.prototype.toArray = function() {
  return {
    roomtypeid: this.roomtypeid,
    quantity: this.quantity,
    description: this.description
  };
};

module.exports = PropertyRoom;
