var SingleEntity = require('./SingleEntity');
var BrandingGroup = require('./BrandingGroup');
var BookingBrand = require('./BookingBrand');
var MarketingBrand = require('./MarketingBrand');

function Branding(id) {
    this.path = 'branding';
    this.id = id;
    this.brandinggroup = new BrandingGroup;
    this.bookingbrand = new BookingBrand;
    this.marketingbrand = new MarketingBrand;
}
Branding.prototype = new SingleEntity();

module.exports = Branding;
