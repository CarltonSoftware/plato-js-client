var Joi = require('joi');
var SingleEntity = require('./SingleEntity');

function TabsEvent(id) {
  this.path = 'tabsevent';
  this.createPath = 'tabsevent';
  this.id = id;
}
TabsEvent.prototype = new SingleEntity();

TabsEvent.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
  };
};

TabsEvent.prototype.validSchema = function() {
  return Joi.object().keys({
    name: Joi.string().required().label('name'),
    description: Joi.string().required().label('description'),
  });
};

module.exports = TabsEvent;
