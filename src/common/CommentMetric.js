var SingleEntity = require('./SingleEntity');

function CommentMetric(id) {
  this.createPath = this.path = 'commentmetric';
  this.id = id;
}
CommentMetric.prototype = new SingleEntity();

CommentMetric.prototype.toArray = function() {
  return {
    metricname: this.metricname,
    reference: this.reference
  };
};

module.exports = CommentMetric;
