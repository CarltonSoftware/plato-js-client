var SingleEntity = require('./SingleEntity');
var RoomType = require('./RoomType');
var PropertyRoom = require('./PropertyRoom');
var PropertyRoomType = require('./PropertyRoomType');
var Joi = require('joi');

function BookingRoom(id) {
  this.path = 'room';
  this.createPath = this.path;
  this.id = id;
  this.roomtype = new RoomType();
  this.room = new PropertyRoom();
  this.propertyroomtype = new PropertyRoomType();

  this.validSchema = function() {
    return {
      propertyroomtype: Joi.object().required().label('Property Room Type')
    }
  };
}

BookingRoom.prototype = new SingleEntity();

/**
 * @param {object} entity JSON response from api
 */
BookingRoom.prototype.mutateResponse = function(entity) {
  if (entity.roomroomtype) {
    this.propertyroomtype.id = parseInt(entity.roomroomtype.split('/').pop());
    this.propertyroomtype.roomtype = this.roomtype;
  }
  return this.mutateEntity(entity);
};

BookingRoom.prototype.toArray = function() {
  return {
    roomroomtypeid: this.propertyroomtype.id
  };
};

module.exports = BookingRoom;
