var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function OwnerPaymentSelectionProperty(id) {
  this.path = 'property';
  this.createPath = 'property';
  this.id = id;
  this.property = new EntityLink({
    entity: 'Property'
  });
}

OwnerPaymentSelectionProperty.prototype = new SingleEntity();
OwnerPaymentSelectionProperty.prototype.toArray = function() {
  return {
    proeprtyid: this.property.id
  };
};

OwnerPaymentSelectionProperty.prototype.validSchema = function() {
  return Joi.object().keys({
    property: Joi.object().required().label('proeprty')
  });
};

module.exports = OwnerPaymentSelectionProperty;
