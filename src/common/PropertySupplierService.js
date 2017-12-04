var SingleEntity = require('./SingleEntity');
var ManagedService = require('./ManagedService');
var Collection = require('./Collection');
var SupplierServiceCharge = require('./SupplierServiceCharge');
var SupplierServiceEvent = require('./SupplierServiceEvent');
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

  this.events = new Collection({
    object: SupplierServiceEvent,
    path: 'bookingevent',
    parent: this
  });
}
PropertySupplierService.prototype = new SingleEntity();

PropertySupplierService.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    serviceid: this.service.id,
    customerbookings: this.customerbookings,
    ownerbookings: this.ownerbookings,
    datetouse: this.datetouse
  };
};

PropertySupplierService.prototype.validSchema = function() {
  return Joi.object().keys({
    fromdate: Joi.string().required().label('Start Date'),
    todate: Joi.string().required().label('Finish Date'),
    service: Joi.object().required().label('Service'),
    customerbookings: Joi.boolean().required().label('Customer bookings'),
    ownerbookings: Joi.boolean().required().label('Owner bookings'),
    datetouse: Joi.string().required().label('Date to Use')
  });
};


module.exports = PropertySupplierService;
