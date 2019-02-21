var SingleEntity = require('./SingleEntity');
var ManagedService = require('./ManagedService');
var Collection = require('./Collection');
var SupplierServiceCharge = require('./SupplierServiceCharge');
var SupplierServiceContract = require('./SupplierServiceContract');
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

  this.contracts = new Collection({
    object: SupplierServiceContract,
    path: 'contract',
    parent: this
  });

  this.events = new Collection({
    object: SupplierServiceEvent,
    path: 'bookingevent',
    parent: this
  });
}
PropertySupplierService.prototype = new SingleEntity();

PropertySupplierService.prototype.toUpdateArray = function() {
  var pss = {
    fromdate: this.fromdate,
    todate: this.todate,
    customerbookings: this.customerbookings,
    ownerbookings: this.ownerbookings,
    agencybookings: this.agencybookings,
    forceupdateservices: this.forceupdateservices
  };
  if (this.datetouse) {
    pss.datetouse = this.datetouse;
  }
  return pss;
};
PropertySupplierService.prototype.toCreateArray = function() {
  var array = this.toUpdateArray();
  array.serviceid = this.service.id;
  return array;
};

PropertySupplierService.prototype.validSchema = function() {
  return Joi.object().keys({
    fromdate: Joi.string().required().label('Start Date'),
    todate: Joi.string().required().label('Finish Date'),
    service: Joi.object().required().label('Service'),
    customerbookings: Joi.boolean().required().label('Customer bookings'),
    ownerbookings: Joi.boolean().required().label('Owner bookings'),
    agencybookings: Joi.boolean().required().label('Agency bookings'),
    datetouse: Joi.string().optional().allow('').label('Date to Use'),
    forceupdateservices: Joi.boolean().required().label('Force update services')
  });
};


module.exports = PropertySupplierService;
