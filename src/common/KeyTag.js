var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Collection = require('./Collection');
var Keyset = require('./Keyset');

function KeyTag(id) {
  this.path = 'keytag';
  this.createPath = 'keytag';
  this.id = id;
  this.Property = new EntityLink({
    entity: 'Property'
  });
  this.KeySet = new Keyset();
}
KeyTag.prototype = new SingleEntity();

KeyTag.prototype.toArray = function() {
  return {
    //TODO: Add in the fields necessary to create a KeyTag
    Property: this.Property,
    tag: this.tag,
    colour: this.colour,
    KeySet: this.KeySet,
    deleted: this.deleted,
  };
};

KeyTag.prototype.validSchema = function() {
  return Joi.object().keys({
    tag: Joi.string().required().label('Tag'),
    colour: Joi.string().optional().allow('').label('Colour'),
    keyset: Joi.object().required().label('Key Set'),
    deleted: Joi.boolean().optional().label('Deleted'),
  });
};

module.exports = KeyTag;
