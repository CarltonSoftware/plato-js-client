var SingleEntity = require('./SingleEntity');
var JobType = require('./JobType');

function Job(id) {
  this.path = this.createPath = 'job';
  this.id = id;
  this.jobtype = new JobType();
}
Job.prototype = new SingleEntity();

Job.prototype.toArray = function() {
  var obj = {
    jobtypeid: this.jobtype.id,
    createddatetime: this.createddatetime,
    createdbyactorid: this.createdbyactor.id,
    cancelleddatetime: this.cancelleddatetime,
    reference: this.reference,
  };

  if (this.cancelledbyactor) {obj.cancelledbyactorid = this.cancelledbyactor.id;}
  if (this.ids) {obj.ids = this.ids;}

  return obj;
};

module.exports = Job;
