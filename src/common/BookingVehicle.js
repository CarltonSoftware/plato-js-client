var SingleEntity = require('./SingleEntity');
var Vehicle = require('./Vehicle');

function BookingVehicle(id) {
  this.path = 'vehicle';
  this.createPath = this.path;
  this.id = id;
  this.vehicle = new Vehicle();
}

BookingVehicle.prototype = new SingleEntity();

BookingVehicle.prototype.toArray = function() {
  return {
    vehicleid: this.vehicleid
  }
}

module.exports = BookingVehicle;