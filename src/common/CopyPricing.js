var Joi = require('joi');
var Entity = require('./Entity');

function CopyPricing(id) {
  this.path = 'copypricing';
  this.createPath = 'copypricing';
  this.id = id;
}

CopyPricing.prototype = new Entity();
CopyPricing.prototype.toArray = function() {
  var fields = {
    type: this.type,
    fromid: this.from.id,
    fromyear: this.fromyear,
    toyear: this.toyear,
    checkforoverlap: this.checkforoverlap,
    overlapaction: this.overlapaction,
    copyminimums: this.copyminimums,
    copyoverrides: this.copyoverrides,
    copypartysizeprices: this.copypartysizeprices,
    incrementamount1: this.incrementamount1,
    incrementpercentage: this.incrementpercentage,
    incrementamount2: this.incrementamount2,
    roundtonearest: this.roundtonearest
  };

  if (this.adjustforchangeday) {
    fields.adjustforchangeday = this.adjustforchangeday;
  } else {
    fields.adjustforchangeday = false;
  }

  if(this.to && this.to.id) {
    fields.toid = this.to.id;
  }

  if (this.toyear == this.fromyear && !this.adjustforchangeday) {
    fields.datemodifier = this.datemodifier + ' days'
  }

  if (this.copypartysizeprices) {
    if (this.partysizepricing && this.partysizepricing.id) {
      fields.partysizepricingid = this.partysizepricing.id
    } else {
      fields.partysizepricing_description = this.partysizepricing_description;
      fields.partysizepricing_partysizefrom = this.partysizepricing_partysizefrom;
      fields.partysizepricing_partysizeto = this.partysizepricing_partysizeto;
      fields.partysizepricing_partysizepricetype = this.partysizepricing_partysizepricetype;
      fields.partysizeprice_useasbase = this.partysizeprice_useasbase;
      fields.partysizeprice_decimalplaces = this.partysizeprice_decimalplaces;
    }
  }

  return fields;
};

/**
 * Create request method
 *
 * @returns {Promise}
 */
CopyPricing.prototype.create = function() {
  return this.createSimplePromiseResult(this.path, this.toArray());
};

CopyPricing.prototype.validSchema = function() {
  // To be revisited
  return Joi.object().keys({
    type: Joi.any().valid('Branding','Property','PropertyBranding').label('Type'),
    fromid: Joi.object().required().label('From ID'),
    toid: Joi.object().optional().label('To ID')
  });
};

module.exports = CopyPricing;
