var SingleEntity = require('./SingleEntity');
var RoomType = require('./RoomType');
var PropertyRoomType = require('./PropertyRoomType');
var Collection = require('./Collection');
var Joi = require('joi');

function PropertyRoom(id) {
  this.path = 'room';
  this.createPath = this.path;
  this.id = id;
  this.roomtype = new RoomType();
  this.roomtypes = new Collection({
    object: PropertyRoomType,
    path: 'roomtype',
    parent: this
  });

  this.validSchema = function() {
    return {
      quantity: Joi.number().required().label('Quantity'),
      description: Joi.string().required().label('Description'),
      roomtype: Joi.object().required().label('Default Room Type'),
      name: Joi.string().required().label('Name')
    }
  };

  this.validEditSchema = function() {
    return {
      quantity: Joi.number().required().label('Quantity'),
      description: Joi.string().required().label('Description'),
      name: Joi.string().required().label('Name')
    }
  };
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
