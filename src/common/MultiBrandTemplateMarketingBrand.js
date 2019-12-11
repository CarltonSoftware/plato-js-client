var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var MarketingBrand = require('./MarketingBrand');

function MultiBrandTemplateMarketingBrand(templateid,id) {
  this.path = 'multibrandtemplate/' + templateid + '/marketingbrand';
  this.createPath = 'multibrandtemplate/' + templateid + '/marketingbrand';
  this.id = id;

  this.marketingbrand = new MarketingBrand();
}
MultiBrandTemplateMarketingBrand.prototype = new SingleEntity();

MultiBrandTemplateMarketingBrand.prototype.toCreateArray = function() {
  return {
    marketingbrandid: this.marketingbrandid,
    inactive: false
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
