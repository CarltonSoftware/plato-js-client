var SingleEntity = require('./SingleEntity');

function LabelQueue(id) {
  this.path = this.createPath = 'labelqueue';
  this.id = id;
}
LabelQueue.prototype = new SingleEntity();

LabelQueue.prototype.toArray = function() {
  return {
    sortreference: this.sortreference,
    reference: this.reference,
    textjson: this.textjson
  };
};

module.exports = LabelQueue;
