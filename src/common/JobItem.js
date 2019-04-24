var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function JobItem(id) {
  this.path = this.createPath = 'item';
  this.id = id;

  this.lastjobitemresponse = new EntityLink({
    entity: 'JobItemResponse'
  });  
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