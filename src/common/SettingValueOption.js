var SingleEntity = require('./SingleEntity');

function SettingValueOption(id) {
  this.path = 'valueoption';
  this.createPath = 'valueoption';
  this.id = id;
}
SettingValueOption.prototype = new SingleEntity();
SettingValueOption.prototype.toArray = function() {
  return {
    settingvalueoption: this.settingvalueoption,
    defaultoption: this.defaultoption
  };
};

module.exports = SettingValueOption;
