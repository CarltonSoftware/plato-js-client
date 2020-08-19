var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var ParkingPermitHolidayPeriod = require('./ParkingPermitHolidayPeriod');
var Joi = require('joi');

function ParkingPermit(id) {
  this.path = 'parkingpermit';
  this.createPath = 'parkingpermit';
  this.id = id;

  this.holidayperiods = new Collection({
    object: ParkingPermitHolidayPeriod,
    parent: this,
    path: 'holidayperiod'
  });

  this.validSchema = function() {
    return {
      location: Joi.string().required().min(1).label('location').description('Parking permit location'),
      owneroragencyrequirement: Joi.any().allow(['Owner', 'Agency']).required().label('owner or agency requirement'),
      maximumvehicles: Joi.number().required().label('maximum vehicles'),
      comments: Joi.string().optional().allow('').label('comments')
    };
  };
}

ParkingPermit.prototype = new SingleEntity();
ParkingPermit.prototype.toArray = function() {
  return {
    location: this.location,
    owneroragencyrequirement: this.owneroragencyrequirement,
    maximumvehicles: this.maximumvehicles,
    comments: this.comments
  };
};

module.exports = ParkingPermit;
