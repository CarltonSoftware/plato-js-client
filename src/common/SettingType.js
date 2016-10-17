var SingleEntity = require('./SingleEntity');

function SettingType(id) {
  this.path = 'settingentity';
  this.createPath = 'settingentity';
  this.id = id;
}
SettingType.prototype = new SingleEntity();
SettingType.prototype.toArray = function() {
  return {
    id: this.id
  };
};

module.exports = SettingType;
