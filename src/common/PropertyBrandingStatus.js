var SingleEntity = require('./SingleEntity');
var Status = require('./Status');
var StatusReason = require('./StatusReason');
var PropertyNote = require('./PropertyNote');

function PropertyBrandingStatus(id) {
  this.path = 'status';
  this.createPath = this.path;
  this.id = id;
  this.status = new Status();
  this.reason = new StatusReason();
  this.propertynote = new PropertyNote();
}

PropertyBrandingStatus.prototype = new SingleEntity();

PropertyBrandingStatus.prototype.toArray = function() {
  return {
    statusid: this.status.id,
    fromdate: this.fromdate,
    todate: this.todate,
    statusreasonid: this.reason.id,
    propertynoteid: this.propertynote.id,
  };
};

module.exports = PropertyBrandingStatus;
