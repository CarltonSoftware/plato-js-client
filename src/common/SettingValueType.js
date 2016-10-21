var SingleEntity = require('./SingleEntity');

function SettingValueType(id) {
  this.path = 'settingvaluetype';
  this.createPath = 'settingvaluetype';
  this.id = id;
}
SettingValueType.prototype = new SingleEntity();
SettingValueType.prototype.toArray = function() {
  return {
    id: this.id
  };
};

module.exports = SettingValueType;
