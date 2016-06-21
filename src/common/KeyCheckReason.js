var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var Keyusertype = require('./KeyUserType');

function KeyCheckReason(id) {
  this.path = 'keycheckreason';
  this.createPath = 'keycheckreason';
  this.id = id;
  this.KeyUserType = new Keyusertype();
}
KeyCheckReason.prototype = new SingleEntity();

KeyCheckReason.prototype.toArray = function() {
  return {
    //TODO: Add in the fields necessary to create a KeyCheckReason
    KeyUserType: this.KeyUserType,
    KeyCheckReason: this.KeyCheckReason,
    description: this.description,
    checkoutperioddays: this.checkoutperioddays,
    checkoutperiodhours: this.checkoutperiodhours,
  };
};

KeyCheckReason.prototype.validSchema = function() {
  return Joi.object().keys({
    keyusertype: Joi.object().required().label('Key User Type'),
    keycheckreason: Joi.string().label('Key Check Reason'),
    description: Joi.string().optional().allow('').label('Description'),
    checkoutperioddays: Joi.number().integer().optional().label('Checkout Period Days'),
    checkoutperiodhours: Joi.number().integer().optional().label('Checkout Period Hours'),
  });
};

module.exports = KeyCheckReason;
