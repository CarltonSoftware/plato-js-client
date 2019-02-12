var SingleEntity = require('./SingleEntity');

function JobItem(id) {
  this.path = this.createPath = 'item';
  this.id = id;
}
JobItem.prototype = new SingleEntity();

JobItem.prototype.toArray = function() {
  return {
    requesturl: this.requesturl,
    requestmethod: this.requestmethod,
    completeddatetime: this.completeddatetime,
    successful: this.successful,
  };
};

module.exports = JobItem;