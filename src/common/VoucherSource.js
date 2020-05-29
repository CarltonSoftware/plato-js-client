var Joi = require('joi');
var SingleEntity = require('./SingleEntity');

function VoucherSource(id) {
  this.path = 'vouchersource';
  this.createPath = 'vouchersource';
  this.id = id;
}
VoucherSource.prototype = new SingleEntity();

VoucherSource.prototype.toArray = function() {
  return {
    vouchersource: this.vouchersource,
    description: this.description,
    refundable: this.refundable,
  };
};

VoucherSource.prototype.validSchema = function() {
  return Joi.object().keys({
    vouchersource: Joi.string().required().label('vouchersource'),
    description: Joi.string().required().label('description'),
    refundable: Joi.boolean().required().label('refundable'),
  });
};

module.exports = VoucherSource;
