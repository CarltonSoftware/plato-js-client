var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function Account(id) {
  this.path = 'account';
  this.createPath = 'account';
  this.id = id;
}
Account.prototype = new SingleEntity();

Account.prototype.toArray = function() {
  return {
    nominalcode: this.nominalcode,
    description: this.description,
    usebranding: this.usebranding,
  };
};

Account.prototype.toString = function() {
  return [this.nominalcode, this.description].join(' ');
};

Account.prototype.validSchema = function() {
  return Joi.object().keys({
    nominalcode: Joi.string().optional().label('nominal code'),
    description: Joi.string().required().label('description'),
    usebranding: Joi.boolean().required().label('use branding'),
  });
};

module.exports = Account;
