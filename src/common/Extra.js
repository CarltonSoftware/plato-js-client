var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var StaticCollection = require('./StaticCollection');
var Branding = require('./Branding');
var ExtraGroup = require('./ExtraGroup');

function Extra(id) {
  this.path = 'extra';
  this.createPath = 'extra';
  this.id = id;
  this.extragroup = new ExtraGroup();
  this.brandings = new StaticCollection({
    object: Branding
  });
}

Extra.prototype = new SingleEntity();
Extra.prototype.toArray = function() {
  return {
    extracode: this.extracode,
    extratype: this.extratype,
    description: this.description,
    extragroupid: this.extragroup.id,
    petextra: this.petextra
  };
};

Extra.validSchema = Joi.object().keys({
  extracode: Joi.string().required().label('extra code'),
  extratype: Joi.string().required().label('extra type'),
  description: Joi.string().required().label('description'),
  extragroup: Joi.object().label('extra group'),
  petextra: Joi.boolean().label('is a pet extra')
});

Extra.prototype.toString = function() {
  return this.extracode + ' - ' + this.description;
};

module.exports = Extra;
