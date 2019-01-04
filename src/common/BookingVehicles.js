var SingleEntity = require('./SingleEntity');

function BookingVehicles(id) {
  this.path = 'vehicle';
  this.createPath = this.path;
  this.id = id;
}

BookingVehicles.prototype.toArray = function() {
    return {
      vehicle: {
        make: this.make,
        model: this.model,
        registration: this.registration,
        colour: this.colour,
        comments: this.comments   
      }    
    }
  }

BookingVehicles.prototype = new SingleEntity();


module.exports = BookingVehicles;