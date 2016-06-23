var SingleEntity = require('./SingleEntity');
var ManagedService = require('./ManagedService');
var Collection = require('./Collection');
var SupplierServiceCharge = require('./SupplierServiceCharge');
var Joi = require('joi');

function PropertySupplierService(id) {
  this.path = 'service';
  this.createPath = 'service';
  this.id = id;
  this.service = new ManagedService();

  this.charges = new Collection({
    object: SupplierServiceCharge,
    path: 'charge',
    parent: this
  });
}
PropertySupplierService.prototype = new SingleEntity();

PropertySupplierService.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    serviceid: this.service.id
  };
};

PropertySupplierService.prototype.validSchema = function() {
  return Joi.object().keys({
    fromdate: Joi.string().required().label('Srart Date'),
    todate: Joi.string().required().label('Finish Date'),
    service: Joi.object().required().label('Service')
  });
};


module.exports = PropertySupplierService;
