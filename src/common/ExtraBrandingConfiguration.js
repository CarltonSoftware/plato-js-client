var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var VatBand = require('./VatBand');

function ExtraBrandingConfiguration(extraId, brandingId, id) {
  this.path = 'extra/' + extraId + '/branding/' + brandingId + '/configuration';
  this.createPath = this.path;
  this.id = id;
  this.vatband = new VatBand();
}
ExtraBrandingConfiguration.prototype = new SingleEntity();

ExtraBrandingConfiguration.prototype.toCreateArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    compulsory: this.compulsory ? 'true' : 'false',
    included: this.included ? 'true' : 'false',
    payagency: this.payagency ? 'true' : 'false',
    payowner: this.payowner ? 'true' : 'false',
    visibletoowner: this.visibletoowner ? 'true' : 'false',
    vatband: this.vatband,
    visibletocustomer: this.visibletocustomer ? 'true' : 'false',
    customerselectable: this.customerselectable ? 'true' : 'false',
    maximumquantity: this.maximumquantity,
    decimalplaces: this.decimalplaces,
    priceoverrideallowed: this.priceoverrideallowed ? 'true' : 'false',
    quantityoverrideallowed: this.quantityoverrideallowed? 'true' : 'false',
    type: this.type,
    propertyid: this.propertyid
  };
};

ExtraBrandingConfiguration.prototype.toUpdateArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    compulsory: this.compulsory,
    included: this.included,
    payagency: this.payagency,
    payowner: this.payowner,
    visibletoowner: this.visibletoowner,
    vatband: this.vatband,
    visibletocustomer: this.visibletocustomer,
    customerselectable: this.customerselectable,
    maximumquantity: this.maximumquantity,
    decimalplaces: this.decimalplaces,
    priceoverrideallowed: this.priceoverrideallowed ? 'true' : 'false',
    quantityoverrideallowed: this.quantityoverrideallowed? 'true' : 'false',
    type: this.type,
  };
};

ExtraBrandingConfiguration.validSchema = Joi.object().keys({
  fromdate: Joi.string().required().label('from date'),
  todate: Joi.string().required().label('to date'),
  compulsory: Joi.boolean().required(),
  included: Joi.boolean().required(),
  payagency: Joi.boolean().required().label('pay agency'),
  payowner: Joi.boolean().required().label('pay owner'),
  visibletoowner: Joi.boolean().required().label('visible to owner'),
  vatband: Joi.string().required().label('VAT band'),
  visibletocustomer: Joi.boolean().required().label('visible to customer'),
  customerselectable: Joi.boolean().required().label('customer selectable'),
  maximumquantity: Joi.string().required().label('maximum quantity'),
  decimalplaces: Joi.string().required().label('decimal places'),
  priceoverrideallowed: Joi.boolean().required().label('price override allowed'),
  quantityoverrideallowed: Joi.boolean().required().label('quantity override allowed'),
  type: Joi.string().required(),
  propertyid: Joi.when('type', {
    is: 'PropertyBrandExtraConfiguration',
    then: Joi.number().required(),
    otherwise: Joi.forbidden()
  })
}),

module.exports = ExtraBrandingConfiguration;
