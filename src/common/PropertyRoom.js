var SingleEntity = require('./SingleEntity');
var RoomType = require('./RoomType');

function PropertyRoom(id) {
  this.path = 'room';
  this.createPath = this.path;
  this.id = id;
  this.roomtype = new RoomType();
}
PropertyRoom.prototype = new SingleEntity();
PropertyRoom.prototype.toArray = function() {
  return {
    roomtypeid: this.roomtype.id,
    quantity: this.quantity,
    description: this.description,
    name: this.name
  };
};

module.exports = PropertyRoom;
