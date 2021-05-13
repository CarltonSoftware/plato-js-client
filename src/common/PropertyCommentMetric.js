var SingleEntity = require('./SingleEntity');
var CommentMetric = require('./CommentMetric');

function PropertyCommentMetric(id) {
  this.createPath = this.path = 'metric';
  this.id = id;
  this.commentmetric = new CommentMetric();
}
PropertyCommentMetric.prototype = new SingleEntity();

PropertyCommentMetric.prototype.toArray = function() {
  return {
    commentmetricid: this.commentmetric.id,
    valuedecimal: this.valuedecimal,
    valuetext: this.valuetext
  };
};

module.exports = PropertyCommentMetric;
