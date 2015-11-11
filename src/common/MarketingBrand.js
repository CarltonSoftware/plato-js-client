var SingleEntity = require('./SingleEntity');

function MarketingBrand(id) {
    this.path = 'marketingbrand';
    this.id = id;
}
MarketingBrand.prototype = new SingleEntity();

module.exports = MarketingBrand;
