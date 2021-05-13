var SingleEntity = require('./SingleEntity');
var RoomType = require('./RoomType');
var Joi = require('joi');

function PropertyRoomType(id) {
  this.path = 'roomtype';
  this.createPath = this.path;
  this.id = id;
  this.roomtype = new RoomType();

  this.validSchema = function() {
    return {
      roomtype: Joi.object().required().label('Room Type')
    }
  };
}
PropertyRoomType.prototype = new SingleEntity();
PropertyRoomType.prototype.toArray = function() {
  return {
    roomtypeid: this.roomtype.id,
    default: this.default
  };
};

module.exports = PropertyRoomType;
