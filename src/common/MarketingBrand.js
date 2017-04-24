var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var BookingBrand = require('./BookingBrand');
var client = require('./platoJsClient').getInstance();

function MarketingBrand(id) {
  this.path = 'marketingbrand';
  this.createPath = 'marketingbrand';
  this.id = id;
  this.agency = new EntityLink({
    entity: 'Agency'
  });
  this.defaultbookingbrand = new EntityLink({ entity: 'BookingBrand' });
}
MarketingBrand.prototype = new SingleEntity();

MarketingBrand.prototype.toArray = function() {
  return {
    marketingbrandcode: this.code,
    marketingbrand: this.name,
    website: this.website,
    email: this.email,
    agencyid: this.agency.id,
    defaultbookingbrandid: this.defaultbookingbrand.id
  };
};

MarketingBrand.prototype.toString = function() {
  return [this.name].join(' ');
};

MarketingBrand.prototype.getEmailtemplate = function(filterCollection, actor) {
  if (actor) {
    return client.get(
      this.getUpdatePath() + '/emailtemplate/' + actor.id + '?orderBy=' + filterCollection.orderBy + filterCollection.getFilterString()
    );
  } else {
    return client.get(
      this.getUpdatePath() + '/emailtemplate?orderBy=' + filterCollection.orderBy + filterCollection.getFilterString()
    );
  }
};

module.exports = MarketingBrand;
