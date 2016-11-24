var SingleEntity = require('./SingleEntity');

function ExtraBrandingPricingRangeElement(extraId, brandingId, pricingId, id) {
    this.path = 'extra/' + extraId + '/branding/' + brandingId + '/pricing/' + pricingId + '/rangeelement';
    this.createPath = this.path;
    this.id = id;
    //this.prices = new Collection({object: Price});
}
ExtraBrandingPricingRangeElement.prototype = new SingleEntity();

ExtraBrandingPricingRangeElement.prototype.toCreateArray = function() {
  return {
    //TODO: Add in the fields necessary to create a ExtraBrandingPricingRangeElement
    lowvalue: this.lowvalue,
    highvalue: this.highvalue,
    price: this.price
  };
};

ExtraBrandingPricingRangeElement.prototype.toUpdateArray = function() {
  return {
    //TODO: Add in the fields necessary to update a ExtraBrandingPricingRangeElement
    lowvalue: this.lowvalue,
    highvalue: this.highvalue,
    price: this.price
  };
};

module.exports = ExtraBrandingPricingRangeElement;
