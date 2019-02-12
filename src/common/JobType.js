var SingleEntity = require('./SingleEntity');

function JobType(id) {
  this.path = this.createPath = 'jobtype';
  this.id = id;
}
JobType.prototype = new SingleEntity();

JobType.prototype.toArray = function() {
  return {
    jobtype: this.jobtype,
    description: this.description,
  };
};

module.exports = JobType;
