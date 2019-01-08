var SingleEntity = require('./SingleEntity');

function BookingVehicle(id) {
  this.path = 'vehicle';
  this.createPath = this.path;
  this.id = id;
}

BookingVehicle.prototype = new SingleEntity();

BookingVehicle.prototype.toArray = function() {
    return {
      vehicleid: this.vehicleid    
    }
  }




module.exports = BookingVehicle;