var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ActorSetting(id) {
  this.path = 'setting';
  this.createPath = 'setting';
  this.id = id;

  this.getDecodedValue = function() {
  	if (this.value) {
  		if (typeof this.value === 'string') {
        if (this.value.slice(0, 1) === '{' || this.value.slice(0, 1) === '[') {
          return JSON.parse(this.value);
        }
      }
      return this.value;
  	}
  };
}

ActorSetting.prototype = new SingleEntity();
ActorSetting.prototype.toArray = function() {
  return {
    name: this.name,
    value: this.value
  };
};

ActorSetting.validSchema = Joi.object().keys({
  name: Joi.string().required().label('Name'),
  value: Joi.string().required().label('Value'),
});


module.exports = ActorSetting;
