var SingleEntity = require('./SingleEntity');
var WorkType = require('./WorkType');

function SupplierWorkType(id) {
  this.path = this.createPath = 'worktype';
  this.id = id;

  this.worktype = new WorkType();
}
SupplierWorkType.prototype = new SingleEntity();

SupplierWorkType.prototype.toArray = function() {
  return {
    skilllevel: this.skilllevel,
    worktypeid: this.worktype.id,
  };
};

module.exports = SupplierWorkType;
