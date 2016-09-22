var Joi = require('joi');
var SingleEntity = require('./SingleEntity');

function KeySet(id) {
  this.path = 'keyset';
  this.createPath = 'keyset';
  this.id = id;
}
KeySet.prototype = new SingleEntity();

KeySet.prototype.toArray = function() {
  return {
    keyset: this.keyset,
  };
};

KeySet.prototype.validSchema = function() {
  return Joi.object().keys({
    keyset: Joi.string().label('Key Set'),
  });
};

module.exports = KeySet;
