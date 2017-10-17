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
  var fields = {
    fromdate: this.fromdate,
    todate: this.todate,
    bookingbookedfromdate: this.bookingbookedfromdate,
    bookingbookedtodate: this.bookingbookedtodate,
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
    copytoallbrands: this.copytoallbrands
  };
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
    updateallbrands: this.updateallbrands
  };
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
  updateallbrands: Joi.boolean().label('update all brands')
});

module.exports = ExtraBrandingConfiguration;
