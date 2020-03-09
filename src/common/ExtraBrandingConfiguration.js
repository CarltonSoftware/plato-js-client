var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var PricingPeriod = require('./PricingPeriod');
var VatBand = require('./VatBand');

function ExtraBrandingConfiguration(extraId, brandingId, id) {
  this.path = 'extra/' + extraId + '/branding/' + brandingId + '/configuration';
  this.createPath = this.path;
  this.id = id;
  this.pricingperiod = new PricingPeriod();
  this.vatband = new VatBand();
}
ExtraBrandingConfiguration.prototype = new SingleEntity();

ExtraBrandingConfiguration.prototype.toCreateArray = function() {
  var fields = {
    fromdate: this.fromdate,
    todate: this.todate,
    bookingbookedfromdate: this.bookingbookedfromdate,
    bookingbookedtodate: this.bookingbookedtodate,
    pricingperiodid: this.pricingperiod && this.pricingperiod.id,
    compulsory: this.compulsory ? 'true' : 'false',
    included: this.included ? 'true' : 'false',
    payagency: this.payagency ? 'true' : 'false',
    payowner: this.payowner ? 'true' : 'false',
    visibletoowner: this.visibletoowner ? 'true' : 'false',
    vatband: this.vatband,
    visibletocustomer: this.visibletocustomer ? 'true' : 'false',
    customerselectable: this.customerselectable ? 'true' : 'false',
    defaultquantity: this.defaultquantity,
    maximumquantity: this.maximumquantity,
    decimalplaces: this.decimalplaces,
    quantityoverrideallowed: this.quantityoverrideallowed? 'true' : 'false',
    priceoverrideallowed: this.priceoverrideallowed ? 'true' : 'false',
    changesbrochureprice: this.changesbrochureprice? 'true' : 'false',
    usepropertyprimarybranding: this.usepropertyprimarybranding ? 'true' : 'false',
    type: this.type,
    propertyid: this.propertyid,
    copytoallbrands: this.copytoallbrands,
    commissionpercentage: this.commissionpercentage,
    bookingreasonrequired: this.bookingreasonrequired? 'true' : 'false',
    copyaction: this.copyaction
  };

  // Start TABS2-3772
  if(this.customerpaymentfirstperiod) {
    fields.customerpaymentfirstperiod = this.customerpaymentfirstperiod;
  } else if (this.customerpaymentfirstperiod === false) {
    fields.customerpaymentfirstperiod = false;
  }

  if(this.customerpaymentlastperiod) {
    fields.customerpaymentlastperiod = this.customerpaymentlastperiod;
  } else if (this.customerpaymentlastperiod === false ) {
    fields.customerpaymentlastperiod = false;
  }
  // End TABS2-3772

  if (this.accountingdatedefinition && this.accountingdatedefinition.id) {
    fields.accountingdatedefinitionid = this.accountingdatedefinition.id;
  }
  return fields;
};

ExtraBrandingConfiguration.prototype.toUpdateArray = function() {
  var fields = {
    fromdate: this.fromdate,
    todate: this.todate,
    bookingbookedfromdate: this.bookingbookedfromdate,
    bookingbookedtodate: this.bookingbookedtodate,
    pricingperiodid: this.pricingperiod && this.pricingperiod.id,
    compulsory: this.compulsory,
    included: this.included,
    payagency: this.payagency,
    payowner: this.payowner,
    visibletoowner: this.visibletoowner,
    vatband: this.vatband,
    visibletocustomer: this.visibletocustomer,
    customerselectable: this.customerselectable,
    defaultquantity: this.defaultquantity,
    maximumquantity: this.maximumquantity,
    decimalplaces: this.decimalplaces,
    quantityoverrideallowed: this.quantityoverrideallowed? 'true' : 'false',
    priceoverrideallowed: this.priceoverrideallowed ? 'true' : 'false',
    changesbrochureprice: this.changesbrochureprice? 'true' : 'false',
    usepropertyprimarybranding: this.usepropertyprimarybranding ? 'true' : 'false',
    type: this.type,
    updateallbrands: this.updateallbrands,
    commissionpercentage: this.commissionpercentage,
    bookingreasonrequired: this.bookingreasonrequired? 'true' : 'false',
    copyaction: this.copyaction
  };

  // Start TABS2-3772
  if(this.customerpaymentfirstperiod) {
    fields.customerpaymentfirstperiod = this.customerpaymentfirstperiod;
  } else if (this.customerpaymentfirstperiod === false) {
    fields.customerpaymentfirstperiod = false;
  }

  if(this.customerpaymentlastperiod) {
    fields.customerpaymentlastperiod = this.customerpaymentlastperiod;
  } else if (this.customerpaymentlastperiod === false ) {
    fields.customerpaymentlastperiod = false;
  }
  // End TABS2-3772

  if (this.accountingdatedefinition && this.accountingdatedefinition.id) {
    fields.accountingdatedefinitionid = this.accountingdatedefinition.id;
  }
  return fields;
};

ExtraBrandingConfiguration.validSchema = Joi.object().keys({
  fromdate: Joi.string().required().label('from date'),
  todate: Joi.string().required().label('to date'),
  bookingbookedfromdate: Joi.string().required().label('booking booked from date'),
  bookingbookedtodate: Joi.string().required().label('booking booked to date'),
  pricingperiod: Joi.object().optional().label('Pricing period'),
  compulsory: Joi.boolean().required(),
  included: Joi.boolean().required(),
  payagency: Joi.boolean().required().label('pay agency'),
  payowner: Joi.boolean().required().label('pay owner'),
  visibletoowner: Joi.boolean().required().label('visible to owner'),
  vatband: Joi.string().required().label('VAT band'),
  visibletocustomer: Joi.boolean().required().label('visible to customer'),
  customerselectable: Joi.boolean().required().label('customer selectable'),
  defaultquantity: Joi.string().required().label('default quantity'),
  maximumquantity: Joi.string().required().label('maximum quantity'),
  decimalplaces: Joi.string().required().label('decimal places'),
  quantityoverrideallowed: Joi.boolean().required().label('quantity override allowed'),
  priceoverrideallowed: Joi.boolean().required().label('price override allowed'),
  changesbrochureprice: Joi.boolean().required().label('changes brochure price'),
  usepropertyprimarybranding: Joi.boolean().required().label('use property primary branding'),
  type: Joi.string().required(),
  propertyid: Joi.when('type', {
    is: 'PropertyBrandExtraConfiguration',
    then: Joi.number().required(),
    otherwise: Joi.forbidden()
  }),
  accountingdatedefinition: Joi.object().optional().label('Accounting Date Definition'),
  copytoallbrands: Joi.boolean().label('copy to all brands'),
  updateallbrands: Joi.boolean().label('update all brands'),
  copyaction: Joi.string().label('update all brands'),
  commissionpercentage: Joi.any().optional().label('commission percentage'),
  // Start TABS2-3772
  customerpaymentfirstperiod: Joi.boolean().optional().label('customer payment first period'),
  customerpaymentlastperiod: Joi.boolean().optional().label('customer payment last period'),
  // End TABS2-3772
  bookingreasonrequired: Joi.boolean().label('booking reason required'),
});

module.exports = ExtraBrandingConfiguration;
