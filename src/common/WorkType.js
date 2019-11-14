var SingleEntity = require('./SingleEntity');

function WorkType(id) {
  this.path = 'worktype';
  this.createPath = this.path;
  this.id = id;
}

WorkType.prototype = new SingleEntity();

WorkType.prototype.toArray = function () {
  var arr = {
    worktype: this.worktype,
    description: this.description,
    inactive: this.inactive,
    icon: this.icon,
    blockavailability: this.blockavailability,
    inactive: this.inactive,
    addpropertywarning: this.addpropertywarning,
  };

  if (this.parentworktype) {
    arr.parentworktypeid = this.parentworktype.id;
  }
  
  return arr;
}

module.exports = WorkType;