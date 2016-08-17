var SingleEntity = require('./SingleEntity');
var Extra = require('./Extra');
var Collection = require('./Collection');
var Currency = require('./Currency');

/**
 * Property branding price object
 *
 * @param {number} id
 */
function PropertyBrandingExtraPricing(id) {
  this.path = 'price';
  this.createPath = this.path;
  this.id = id;

  this.currency = new Currency();
  this.dailyprices = new Collection();
  this.extradetails = new Extra();
}

PropertyBrandingExtraPricing.prototype = new SingleEntity();



module.exports = PropertyBrandingExtraPricing;
