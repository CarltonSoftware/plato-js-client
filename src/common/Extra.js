var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var StaticCollection = require('./StaticCollection');
var Collection = require('./Collection');
var Branding = require('./Branding');


function Extra(id) {
  this.path = 'extra';
  this.createPath = 'extra';
  this.id = id;
  this.brandings = new StaticCollection({
    object: Branding
  });
}

Extra.prototype = new SingleEntity();
Extra.prototype.toArray = function() {
  return {
    extracode: this.extracode,
    extratype: this.extratype,
    description: this.description
  };
};

Extra.validSchema = Joi.object().keys({
  extracode: Joi.string().required().label('extra code'),
  extratype: Joi.string().required().label('extra type'),
  description: Joi.string().required().label('description')
}),

module.exports = Extra;
