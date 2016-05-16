var SingleEntity = require('./SingleEntity');

function ManagedActivityService(activityId, id) {
  this.path = 'managedactivity/' + activityId + '/service';
  this.createPath = 'managedactivity/' + activityId + '/service';
  this.id = id;
}
ManagedActivityService.prototype = new SingleEntity();

ManagedActivityService.prototype.toCreateArray = function() {
  return {
    service: this.service,
    fromdate: this.fromdate,
    todate: this.todate
  };
};

ManagedActivityService.prototype.toUpdateArray = function() {
  return {
    service: this.service,
    fromdate: this.fromdate,
    todate: this.todate
  };
};

module.exports = ManagedActivityService;
