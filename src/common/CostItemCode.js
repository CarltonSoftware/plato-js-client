var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var VatBand = require('./VatBand');

function CostItemCode(id) {
  this.path = 'costitemcode';
  this.createPath = 'costitemcode';
  this.id = id;

  this.vatband = new VatBand();
}
CostItemCode.prototype = new SingleEntity();

CostItemCode.prototype.validSchema = function() {
  return {
    costitemcode: Joi.string().required().label('Cost Item Code'),
    description: Joi.string().optional().allow('').label('Description'),
    vatbandid: Joi.number().allow('').label('Vat Band'),
    inactive: Joi.boolean().optional().label('Inactive')
  };
};

CostItemCode.prototype.toArray = function() {
  return {
    costitemcode: this.costitemcode,
    description: this.description,
    vatbandid: this.vatband.id,
    inactive: this.inactive
  };
};

module.exports = CostItemCode;
