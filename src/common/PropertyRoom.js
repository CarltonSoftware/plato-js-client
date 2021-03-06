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
      name: Joi.string().required().label('Name (visible to customer)'),
      description: Joi.string().required().label('Description (visible to customer)'),
      quantity: Joi.number().required().label('Quantity'),
      roomtype: Joi.object().required().label('Default Room Type')
    }
  };

  this.validEditSchema = function() {
    return {
      name: Joi.string().required().label('Name (visible to customer)'),
      description: Joi.string().required().label('Description (visible to customer)'),
      quantity: Joi.number().required().label('Quantity')
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
