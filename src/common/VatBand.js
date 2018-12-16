var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function VatBand(id) {
  this.path = 'vatband';
  this.createPath = 'vatband';
  this.id = id;

  this.validSchema = function() {
    return {
      vatband: Joi.string().required().label('VAT Band')
    }
  };
}

VatBand.prototype = new SingleEntity();
VatBand.prototype.toArray = function() {
  return {
    vatband: this.vatband
  };
};

module.exports = VatBand;
