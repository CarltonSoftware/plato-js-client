var SingleEntity = require('./SingleEntity');

function JobItemResponse(id) {
  this.path = this.createPath = 'response';
  this.id = id;
}
JobItemResponse.prototype = new SingleEntity();

JobItemResponse.prototype.toArray = function() {
  return {
    responsedatetime: this.responsedatetime,
    statuscod: this.statuscode,
    content: this.content,
  };
};

module.exports = JobItemResponse;