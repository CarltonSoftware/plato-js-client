var SingleEntity = require('./SingleEntity');

function ActorDevice(id) {
  this.createPath = 'device';
  this.path = 'device';
  this.id = id;
}

ActorDevice.prototype = new SingleEntity();

ActorDevice.prototype.toArray = function() {
  return {
    deviceid: this.deviceid,
    registereddatetime: this.registereddatetime,
  };
};

module.exports = ActorDevice;
