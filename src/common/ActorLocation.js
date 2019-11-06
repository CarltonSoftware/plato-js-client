var SingleEntity = require('./SingleEntity');

function ActorLocation(id) {
  this.createPath = 'location';
  this.path = 'location';
  this.id = id;
}

ActorLocation.prototype = new SingleEntity();

ActorLocation.prototype.toArray = function() {
  var arr = {
    longitude: this.longitude,
    latitude: this.latitude,
    loggeddatetime: this.loggeddatetime,
  };

  if (this.deviceid) {
    arr.deviceid = this.deviceid;
  }

  return arr;
};

module.exports = ActorLocation;
