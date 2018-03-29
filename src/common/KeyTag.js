var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var KeySet = require('./KeySet');

function KeyTag(id) {
  this.path = 'keytag';
  this.createPath = 'keytag';
  this.id = id;
  this.property = new EntityLink({
    entity: 'Property'
  });
  this.keyset = new KeySet();
}
KeyTag.prototype = new SingleEntity();

KeyTag.prototype.toArray = function() {
  return {
    propertyid: this.property.id,
    tag: this.tag,
    colour: this.colour,
    keysetid: this.keyset.id,
    deleted: this.deleted,
  };
};

KeyTag.prototype.validSchema = function() {
  return Joi.object().keys({
    property: Joi.object().required().label('Property'),
    tag: Joi.string().required().label('Tag'),
    colour: Joi.string().optional().allow('').label('Colour'),
    keyset: Joi.object().required().label('Key Set'),
    deleted: Joi.boolean().optional().label('Deleted'),
  });
};

module.exports = KeyTag;
