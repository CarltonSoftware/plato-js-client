var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var KeyTag = require('./KeyTag');

function Keyy(id) {
  this.path = 'keyy';
  this.createPath = 'keyy';
  this.id = id;
  this.keytag = new KeyTag();
}
Keyy.prototype = new SingleEntity();

Keyy.prototype.toArray = function() {
  return {
    serialnumber: this.serialnumber,
    manufacturerortype: this.manufacturerortype,
    description: this.description,
  };
};

Keyy.prototype.validSchema = function() {
  return Joi.object().keys({
    serialnumber: Joi.string().required().label('Serial Number'),
    manufacturerortype: Joi.string().required().label('Manufacturer or Type'),
    description: Joi.string().required().label('Description'),
  });
};

module.exports = Keyy;
