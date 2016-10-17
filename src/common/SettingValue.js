var SingleEntity = require('./SingleEntity');

function SettingValue(id) {
  this.path = 'value';
  this.createPath = 'value';
  this.id = id;
}
SettingValue.prototype = new SingleEntity();
SettingValue.prototype.toArray = function() {
  return {
    id: this.id,
    entityid: this.entityid,
    settingvalue: this.settingvalue
  };
};

module.exports = SettingValue;
