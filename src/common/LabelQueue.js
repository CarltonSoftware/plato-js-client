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

LabelQueue.prototype.getText = function() {
  try {
    return JSON.parse(this.textjson);
  } catch (SyntaxError) {
    return this.textjson;
  }
};

LabelQueue.prototype.toString = function(separator) {
  var text = this.getText();

  if (text.join) {
    return text.join(separator || '\n');
  }
  return text;
};

module.exports = LabelQueue;
