var SingleEntity = require('./SingleEntity');

function AssessmentGrade(id) {
    this.path = 'assessmentgrade';
    this.createPath = 'assessmentgrade';
    this.id = id;
}
AssessmentGrade.prototype = new SingleEntity();

AssessmentGrade.prototype.toArray = function() {
  return {
    name: this.name
  };
};

module.exports = AssessmentGrade;