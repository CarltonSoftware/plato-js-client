var SingleEntity = require('./SingleEntity');
var MarketingBrand = require('./MarketingBrand');

function SpecialOfferMarketingBranding(id) {
    this.path = this.createPath = 'marketingbrand';
    this.id = id;
    this.marketingbrand = new MarketingBrand();
}

SpecialOfferMarketingBranding.prototype = new SingleEntity();
SpecialOfferMarketingBranding.prototype.toArray = function() {
    return {
        marketingbrandid: this.marketingbrand.id
    };
}

module.exports = SpecialOfferMarketingBranding;