var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var Keytag = require('./Keytag');

function Keyy(id) {
  this.path = 'keytag';
  this.createPath = 'keytag';
  this.id = id;
  this.KeyTag = new Keytag();
}
Keyy.prototype = new SingleEntity();

Keyy.prototype.toArray = function() {
  return {
    //TODO: Add in the fields necessary to create a Keyy
    KeyTag: this.KeyTag,
    serialnumber: this.serialnumber,
    manufacturerortype: this.manufacturerortype,
    description: this.description,
  };
};

Keyy.prototype.validSchema = function() {
  return Joi.object().keys({
    keytag: Joi.object().required().label('Key Tag'),
    serialnumber: Joi.string().optional().allow('').label('Serial Number'),
    manufacturerortype: Joi.string().optional().allow('').label('Manufacturer or Type'),
    description: Joi.string().optional().allow('').label('Description'),
  });
};

module.exports = Keyy;
