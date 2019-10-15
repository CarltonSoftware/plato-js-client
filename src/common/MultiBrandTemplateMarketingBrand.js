var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var MarketingBrand = require('./BookingBrand');

function MultiBrandTemplateMarketingBrand(templateid,id) {
  this.path = 'multibrandtemplate/' + templateid + '/bookingbrand';
  this.createPath = 'multibrandtemplate/' + templateid + '/bookingbrand';
  this.id = id;

  this.marketingbrand = new MarketingBrand();
}
MultiBrandTemplateMarketingBrand.prototype = new SingleEntity();

MultiBrandTemplateMarketingBrand.prototype.toCreateArray = function() {
  return {
    marketingbrandid: this.marketingbrandid,
    inactive: this.inactive
  };
};

MultiBrandTemplateMarketingBrand.prototype.toUpdateArray = function() {
  return {
    inactive: this.inactive,
  };
};

MultiBrandTemplateMarketingBrand.validSchema = Joi.object().keys({
    marketingbrandid: Joi.string().required().label('marketingbrand'),
  inactive: Joi.boolean().optional().label('inactive')
});

module.exports = MultiBrandTemplateMarketingBrand;
