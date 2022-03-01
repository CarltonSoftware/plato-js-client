var Collection = require('./Collection');
var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var ExtendedExtraItemPrice = require('./ExtendedExtraItemPrice');

function ExtendedExtraItem(id) {
  this.path = 'item';
  this.createPath = 'item';
  this.id = id;

  this.prices = new Collection({
    object: ExtendedExtraItemPrice,
    path: 'price',
    parent: this
  });
}
ExtendedExtraItem.prototype = new SingleEntity();

ExtendedExtraItem.prototype.toArray = function() {
  var arr = {
    reference: this.reference,
    description: this.description,
    supplier: this.supplier,
    hide: this.hide,
  };

  if (this.parentextendedextraitem && this.parentextendedextraitem.id) {
    arr.parentextendedextraitemid = this.parentextendedextraitem.id;
  }

  return arr;
};

ExtendedExtraItem.prototype.validSchema = function() {
  return Joi.object().keys({
    reference: Joi.string().required().label('reference'),
    description: Joi.string().required().label('description'),
    supplier: Joi.string().required().label('supplier'),
    hide: Joi.boolean().integer().required().label('hide'),
  });
};

module.exports = ExtendedExtraItem;
