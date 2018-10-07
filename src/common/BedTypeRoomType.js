var SingleEntity = require('./SingleEntity');
var BedType = require('./BedType');
var Joi = require('joi');

function BedTypeRoomType(id) {
  this.path = 'bedtype';
  this.createPath = this.path;
  this.id = id;
  this.bedtype = new BedType();

  this.validSchema = function() {
    return {
      bedtype: Joi.object().required().label('bedtype'),
      quantity: Joi.number().required().label('quantity')
    };
  }
}

BedTypeRoomType.prototype = new SingleEntity();
BedTypeRoomType.prototype.toArray = function() {
  return {
    bedtypeid: this.bedtype.id,
    quantity: this.quantity
  };
};

module.exports = BedTypeRoomType;
