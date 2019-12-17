var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var VatBand = require('./VatBand');
var OwnerChargeCode = require('./OwnerChargeCode');
var Collection = require('./Collection');

function CostItemCode(id) {
  this.path = 'costitemcode';
  this.createPath = 'costitemcode';
  this.id = id;

  this.vatband = new VatBand();

  this.ownerchargecodes = new Collection({
    object: OwnerChargeCode,
    path: 'ownerchargecode',
    parent: this
  });
}
CostItemCode.prototype = new SingleEntity();

CostItemCode.prototype.validSchema = function() {
  return {
    costitemcode: Joi.string().required().label('Cost Item Code'),
    description: Joi.string().optional().allow('').label('Description'),
    vatband: Joi.object().optional().label('Vat Band'),
    inactive: Joi.boolean().optional().label('Inactive'),
    recharge: Joi.boolean().optional().label('Recharge'),
    externaldescription: Joi.string().optional().allow("").label('External Description')
  };
};

CostItemCode.prototype.toArray = function() {
  return {
    costitemcode: this.costitemcode,
    description: this.description,
    vatbandid: this.vatband.id,
    inactive: this.inactive,
    recharge: this.recharge,
    externaldescription: this.externaldescription
  };
};

CostItemCode.prototype.toString = function() {
  return this.description + ' (' + this.costitemcode + ')'; //this.costitemcode + ' - ' + this.description;
};

module.exports = CostItemCode;
