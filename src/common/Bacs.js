var SingleEntity = require('./SingleEntity');

function Bacs() {
}
Bacs.prototype = new SingleEntity();

Bacs.prototype.get = function() {
  return this.okPromiseResult('bacs', this.params);
};

module.exports = Bacs;
