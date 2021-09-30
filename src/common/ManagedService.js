var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ManagedService(id) {
  this.path = 'service';
  this.createPath = 'service';
  this.id = id;
}
ManagedService.prototype = new SingleEntity();

ManagedService.prototype.toCreateArray = function() {
  return {
    name: this.name,
    description: this.description,
    donotmodify: this.donotmodify ? this.donotmodify : false,
    datetouse: typeof this.datetouse === 'object' ? this.datetouse.datetouse : this.datetouse,
    customerbookings: this.customerbookings,
    ownerbookings: this.ownerbookings,
    agencybookings: this.agencybookings,
    ownercanprovide: this.ownercanprovide,
    agencycanprovide: this.agencycanprovide,
    suppliercanprovide: this.suppliercanprovide
  };
};

ManagedService.prototype.toString = function() {
  return this.name;
};

ManagedService.prototype.validSchema = function() {
  return Joi.object().keys({
    name: Joi.string().required().label('name'),
    description: Joi.string().required().label('description'),
    donotmodify: Joi.boolean().label('do not modify'),
    vatband: Joi.object().required().label('VAT band'),
    datetouse: Joi.object().required().label('date to use'),
    customerbookings: Joi.boolean().label('applies to customer bookings'),
    ownerbookings: Joi.boolean().label('applies to owner bookings'),
    agencybookings: Joi.boolean().label('applies to agency bookings'),
    ownercanprovide: Joi.boolean().label('owner can provide service'),
    agencycanprovide: Joi.boolean().label('agency can provide service'),
    suppliercanprovide: Joi.boolean().label('suppplier can provide service')
  });
};

module.exports = ManagedService;