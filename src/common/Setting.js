var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var SettingEntity = require('./SettingEntity');

function Setting(id) {
  this.path = 'setting';
  this.createPath = this.path;
  this.id = id;

  this.entitysettings = new Collection({
    object: SettingEntity,
    parent: this
  });
}
Setting.prototype = new SingleEntity();
Setting.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
    type: this.type,
    minimumvalue: this.minimumvalue,
    maximumvalue: this.maximumvalue,
    decimalplaces: this.decimalplaces,
    defaultvalue: this.defaultvalue,
    restrictvalue: this.restrictvalue
  };
};

module.exports = Setting;
