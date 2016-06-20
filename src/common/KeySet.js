var SingleEntity = require('./SingleEntity');

function KeySet(id) {
  this.path = 'keyset';
  this.createPath = 'keyset';
  this.id = id;
}
KeySet.prototype = new SingleEntity();

KeySet.prototype.toArray = function() {
  return {
    //TODO: Add in the fields necessary to create a KeySet
    KeySet: this.KeySet,
  };
};

KeySet.prototype.validSchema = function() {
  return Joi.object().keys({
    keyset: Joi.string().label('Key Set'),
  });
};

module.exports = KeySet;
