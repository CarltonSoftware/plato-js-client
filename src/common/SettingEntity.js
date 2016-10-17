var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var SettingValue = require('./SettingValue');

function SettingEntity(id) {
  this.path = 'entity';
  this.createPath = 'entity';
  this.id = id;

  this.values = new Collection({
    object: SettingValue,
    parent: this
  });
}
SettingEntity.prototype = new SingleEntity();
SettingEntity.prototype.toArray = function() {
  return {
    id: this.id,
    entity: this.entity,
    mandatory: this.mandatory,
    defaultvalue: this.defaultvalue
  };
};

module.exports = SettingEntity;
