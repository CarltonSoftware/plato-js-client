var SingleEntity = require('./SingleEntity');

function RoomType(id) {
  this.path = 'roomtype';
  this.createPath = this.path;
  this.id = id;
}
RoomType.prototype = new SingleEntity();

RoomType.prototype.toArray = function() {
  return {
    'name': this.name,
    'sleeps': this.sleeps,
    'description': this.description
  };
};

module.exports = RoomType;