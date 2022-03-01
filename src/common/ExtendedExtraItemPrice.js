var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Joi = require('joi');

function ExtendedExtraItemPrice(id) {
  this.path = 'price';
  this.createPath = 'price';
  this.id = id;
  this.extendedextraitem = new EntityLink({
    entity: 'ExtendedExtraItem'
  });
}
ExtendedExtraItemPrice.prototype = new SingleEntity();

ExtendedExtraItemPrice.prototype.toArray = function() {
  return {
    //TODO: Add in the fields necessary to create a ExtendedExtraItemPrice
    extendedextraitemid: this.extendedextraitem.id,
    category: this.category,
    fromdate: this.fromdate,
    todate: this.todate,
    itemtime: this.itemtime,
    price: this.price,
    cost: this.cost,
    hide: this.hide,
  };
};

ExtendedExtraItemPrice.prototype.validSchema = function() {
  return Joi.object().keys({
    extendedextraitem: Joi.object().required().label('extendedextraitem'),
    category: Joi.string().label('category'),
    fromdate: Joi.date().required().label('fromdate'),
    todate: Joi.date().required().label('todate'),
    itemtime: Joi.time().optional().label('itemtime'),
    price: Joi.number().double().label('price'),
    cost: Joi.number().double().optional().label('cost'),
    hide: Joi.boolean().required().label('hide'),
  });
};

module.exports = ExtendedExtraItemPrice;
