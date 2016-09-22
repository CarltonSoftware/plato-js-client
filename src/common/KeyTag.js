var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Collection = require('./Collection');
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
    property: this.property,
    tag: this.tag,
    colour: this.colour,
    keyset: this.keyset,
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
