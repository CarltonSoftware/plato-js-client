var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var MarketingBrand = require('./MarketingBrand');

function MultiBrandTemplateMarketingBrand(id) {
  this.path = this.createPath = 'marketingbrand';
  this.id = id;
  this.marketingbrand = new MarketingBrand();
}

MultiBrandTemplateMarketingBrand.prototype = new SingleEntity();
MultiBrandTemplateMarketingBrand.prototype.getCreatePath = function() {
  return '/multibrandtemplate/' + this.parent.id + '/' + this.path;
};
MultiBrandTemplateMarketingBrand.prototype.toCreateArray = function() {
  return {
    marketingbrandid: this.marketingbrandid,
    inactive: false
  };
};

MultiBrandTemplateMarketingBrand.validSchema = Joi.object().keys({
  marketingbrandid: Joi.string().required().label('marketingbrand'),
  inactive: Joi.boolean().optional().label('inactive')
});

module.exports = MultiBrandTemplateMarketingBrand;
