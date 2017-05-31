var Entity = require('./Entity');

function CopyPricing(id) {
  this.path = 'copypricing';
  this.createPath = 'copypricing';
  this.id = id;
}

CopyPricing.prototype = new SingleEntity();
CopyPricing.prototype.toArray = function() {
  var fields = {
    type: this.type,
    fromid: this.from.id,
    fromdate: this.fromdate,
    todate: this.todate,
    datemodifier: this.datemodifier,
    sameweekday: this.sameweekday,
    copyminimums: this.copyminimums,
    copyoverrides: this.copyoverrides,
    copypartysizeprices: this.copypartysizeprices,
    incrementamount1: this.incrementamount1,
    incrementpercentage: this.incrementpercentage,
    incrementamount2: this.incrementamount2,
    roundtonearest: this.roundtonearest
  };

  if(this.to && this.to.id) {
    fields.toid = this.to.id;
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

CopyPricing.prototype.validSchema = function() {
  // To be revisited
  return Joi.object().keys({
    type: Joi.any().valid('Branding','Property','PropertyBranding').label('Type'),
    fromid: Joi.object().required().label('From ID'),
    toid: Joi.object().optional().label('To ID')
  });
};

module.exports = CopyPricing;
