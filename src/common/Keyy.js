var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
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
    keytagid: this.keytagid,
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
