var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var BedTypeRoomType = require('./BedTypeRoomType');
var Joi = require('joi');

function RoomType(id) {
  this.path = 'roomtype';
  this.createPath = this.path;
  this.id = id;
  this.bedtypes = new Collection({
    object: BedTypeRoomType,
    path: 'bedtype',
    parent: this
  });
}
RoomType.prototype = new SingleEntity();

RoomType.prototype.validSchema = function() {
  return {
    name: Joi.string().required().label('name'),
    sleeps: Joi.string().required().label('sleeps'),
    description: Joi.string().required().label('description')
  };
};

RoomType.prototype.toArray = function() {
  return {
    name: this.name,
    sleeps: this.sleeps,
    description: this.description
  };
};

RoomType.prototype.toString = function() {
  return this.name + ' (' + this.sleeps + ')';
};

module.exports = RoomType;
