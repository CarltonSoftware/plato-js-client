var SingleEntity = require('./SingleEntity');

function Setting(id) {
    this.path = 'setting';
    this.id = 'id';
}
Setting.prototype = new SingleEntity();
Setting.prototype.toArray = function() {
  return {
    name: this.sourcecode,
    description: this.description,
    type: this.sourcecategory,
    minimumvalue: this.minimumvalue,
    maximumvalue: this.maximumvalue,
    decimalplaces: this.decimalplaces,
    defaultvalue: this.defaultvalue
  };
};

module.exports = Setting;
